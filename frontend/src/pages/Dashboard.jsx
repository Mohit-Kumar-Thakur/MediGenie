import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AuthContext from '../context/AuthContext';
import Profile from '../components/Profile';

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="container section">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-block" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="container section dashboard">
      <h1>Welcome back, {user.username}!</h1>
      <p className="lead">Here's your MediGenie account.</p>
      <div className="dashboard-grid">
        <Profile user={user} />
        <div className="card cta-card">
          <h2>Explore conditions</h2>
          <p>Browse remedies, exercises and nutrition guidance for eight common chronic conditions.</p>
          <Link to="/#conditions" className="btn btn-primary">
            Browse conditions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
