import PropTypes from 'prop-types';
import { Scale, Ban } from 'lucide-react';

const NutritionList = ({ nutrition }) => {
  if (!nutrition || nutrition.length === 0) {
    return <div className="empty-state">No nutrition information available for this condition yet.</div>;
  }

  return (
    <div className="content-grid">
      {nutrition.map((item, index) => (
        <article key={item._id || index} className="card content-card">
          <h3>{item.food}</h3>
          {item.benefits && <p>{item.benefits}</p>}

          {item.servingSize && (
            <div className="meta-row">
              <span className="meta"><Scale size={15} /> {item.servingSize}</span>
            </div>
          )}

          {item.recipes?.length > 0 && (
            <div className="content-section">
              <h4>Try these</h4>
              <ul className="bullet-list">
                {item.recipes.map((recipe, i) => <li key={i}>{recipe}</li>)}
              </ul>
            </div>
          )}

          {item.avoid?.length > 0 && (
            <div className="callout callout-danger">
              <Ban size={18} />
              <div>
                <strong>Limit or avoid</strong>
                <ul className="chips">
                  {item.avoid.map((food, i) => <li key={i} className="chip chip-danger">{food}</li>)}
                </ul>
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

NutritionList.propTypes = {
  nutrition: PropTypes.array
};

export default NutritionList;
