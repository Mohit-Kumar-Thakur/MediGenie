import PropTypes from 'prop-types';
import { AlertTriangle } from 'lucide-react';

const HomeRemedyList = ({ remedies }) => {
  if (!remedies || remedies.length === 0) {
    return <div className="empty-state">No home remedies available for this condition yet.</div>;
  }

  return (
    <div className="content-grid">
      {remedies.map((remedy, index) => (
        <article key={remedy._id || index} className="card content-card">
          <h3>{remedy.title}</h3>
          {remedy.description && <p>{remedy.description}</p>}

          {remedy.ingredients?.length > 0 && (
            <div className="content-section">
              <h4>You'll need</h4>
              <ul className="bullet-list">
                {remedy.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
              </ul>
            </div>
          )}

          {remedy.preparation && (
            <div className="content-section">
              <h4>How to prepare</h4>
              <p>{remedy.preparation}</p>
            </div>
          )}

          {remedy.warnings && (
            <div className="callout callout-warning">
              <AlertTriangle size={18} />
              <p>{remedy.warnings}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

HomeRemedyList.propTypes = {
  remedies: PropTypes.array
};

export default HomeRemedyList;
