import PropTypes from 'prop-types';
import { Clock, Repeat, ShieldAlert } from 'lucide-react';

const ExerciseList = ({ exercises }) => {
  if (!exercises || exercises.length === 0) {
    return <div className="empty-state">No exercises available for this condition yet.</div>;
  }

  return (
    <div className="content-grid">
      {exercises.map((exercise, index) => (
        <article key={exercise._id || index} className="card content-card">
          <h3>{exercise.title}</h3>
          {exercise.description && <p>{exercise.description}</p>}

          {(exercise.duration || exercise.frequency) && (
            <div className="meta-row">
              {exercise.duration && <span className="meta"><Clock size={15} /> {exercise.duration}</span>}
              {exercise.frequency && <span className="meta"><Repeat size={15} /> {exercise.frequency}</span>}
            </div>
          )}

          {exercise.steps?.length > 0 && (
            <div className="content-section">
              <h4>Steps</h4>
              <ol className="steps-list">
                {exercise.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
          )}

          {exercise.precautions && (
            <div className="callout callout-danger">
              <ShieldAlert size={18} />
              <p>{exercise.precautions}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array
};

export default ExerciseList;
