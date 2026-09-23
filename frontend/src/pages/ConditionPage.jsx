import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Leaf, Dumbbell, Apple, PlayCircle } from 'lucide-react';
import api, { getErrorMessage } from '../api';
import { getConditionIcon } from '../conditionIcons';
import HomeRemedyList from '../components/HomeRemedyList';
import ExerciseList from '../components/ExerciseList';
import NutritionList from '../components/NutritionList';
import VideoPlayer from '../components/VideoPlayer';

const tabs = [
  { id: 'remedies', label: 'Home Remedies', icon: Leaf },
  { id: 'exercises', label: 'Exercises', icon: Dumbbell },
  { id: 'nutrition', label: 'Nutrition', icon: Apple },
  { id: 'videos', label: 'Videos', icon: PlayCircle }
];

const ConditionPage = () => {
  const { name } = useParams();
  const [condition, setCondition] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('remedies');

  useEffect(() => {
    setCondition(null);
    setError(null);
    setActiveTab('remedies');
    api
      .get(`/conditions/${encodeURIComponent(name)}`)
      .then((res) => setCondition(res.data))
      .catch((err) => setError(getErrorMessage(err)));
  }, [name]);

  if (error) {
    return (
      <div className="container section">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> All conditions</Link>
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!condition) {
    return (
      <div className="container section">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-block" />
      </div>
    );
  }

  const Icon = getConditionIcon(condition.name);
  const counts = {
    remedies: condition.homeRemedies?.length || 0,
    exercises: condition.exercises?.length || 0,
    nutrition: condition.nutrition?.length || 0,
    videos: condition.videos?.length || 0
  };

  return (
    <div className="container section">
      <Link to="/" className="back-link"><ArrowLeft size={16} /> All conditions</Link>

      <header className="condition-header">
        <span className="condition-icon lg"><Icon size={32} /></span>
        <div>
          <h1>{condition.name}</h1>
          {condition.description && <p className="lead">{condition.description}</p>}
          {condition.symptoms?.length > 0 && (
            <div className="symptoms">
              <span className="symptoms-label">Common symptoms</span>
              <ul className="chips">
                {condition.symptoms.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="tabs" role="tablist">
        {tabs.map(({ id, label, icon: TabIcon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            className={`tab ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <TabIcon size={18} />
            <span>{label}</span>
            <span className="tab-count">{counts[id]}</span>
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel">
        {activeTab === 'remedies' && <HomeRemedyList remedies={condition.homeRemedies} />}
        {activeTab === 'exercises' && <ExerciseList exercises={condition.exercises} />}
        {activeTab === 'nutrition' && <NutritionList nutrition={condition.nutrition} />}
        {activeTab === 'videos' && <VideoPlayer videos={condition.videos} />}
      </div>
    </div>
  );
};

export default ConditionPage;
