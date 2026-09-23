import { useState, useEffect, useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Leaf, Dumbbell, Apple, PlayCircle, ArrowRight } from 'lucide-react';
import api, { getErrorMessage } from '../api';
import AuthContext from '../context/AuthContext';
import { getConditionIcon } from '../conditionIcons';

const features = [
  { icon: Leaf, title: 'Home remedies', text: 'Simple, safe practices with clear warnings.' },
  { icon: Dumbbell, title: 'Exercises', text: 'Step-by-step routines with precautions.' },
  { icon: Apple, title: 'Nutrition', text: 'What to eat, how much and what to avoid.' },
  { icon: PlayCircle, title: 'Videos', text: 'Educational content from trusted sources.' }
];

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [conditions, setConditions] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { hash } = useLocation();

  useEffect(() => {
    api
      .get('/conditions')
      .then((res) => setConditions(res.data))
      .catch((err) => setError(getErrorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  // Scroll to #conditions once the list has rendered (links from the navbar and dashboard).
  useEffect(() => {
    if (hash && !loading) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }, [hash, loading]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return conditions;
    return conditions.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.symptoms || []).some((s) => s.toLowerCase().includes(q))
    );
  }, [conditions, query]);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Your personal health companion</span>
          <h1>
            Understand your health.<br />
            <span className="accent">Take the next step.</span>
          </h1>
          <p className="hero-text">
            {user ? `Welcome back, ${user.username}. ` : ''}
            Explore home remedies, exercises, nutrition advice and educational videos for common
            chronic conditions, all in one place.
          </p>
          <div className="search-box">
            <Search size={20} />
            <input
              type="search"
              placeholder="Search a condition or symptom, e.g. fatigue"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search conditions"
            />
          </div>
        </div>
      </section>

      <section className="container features">
        {features.map(({ icon: Icon, title, text }) => (
          <div className="feature" key={title}>
            <span className="feature-icon"><Icon size={20} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container section" id="conditions">
        <div className="section-head">
          <h2>Health conditions</h2>
          <p>Select a condition to see personalised guidance.</p>
        </div>

        {loading && (
          <div className="condition-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="condition-card skeleton" key={i} />
            ))}
          </div>
        )}

        {error && <div className="alert alert-error">Could not load conditions: {error}</div>}

        {!loading && !error && filtered.length === 0 && (
          <div className="empty-state">No conditions match “{query}”.</div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="condition-grid">
            {filtered.map((condition) => {
              const Icon = getConditionIcon(condition.name);
              return (
                <Link
                  key={condition._id}
                  to={`/conditions/${encodeURIComponent(condition.name)}`}
                  className="condition-card"
                >
                  <span className="condition-icon"><Icon size={24} /></span>
                  <h3>{condition.name}</h3>
                  <p>{condition.summary || condition.description}</p>
                  <span className="card-link">
                    View guidance <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;
