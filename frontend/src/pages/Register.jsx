import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const { user, register } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) return <Navigate to="/dashboard" replace />;

  const handleRegister = async (formData) => {
    await register(formData);
    navigate('/dashboard');
  };

  return <AuthForm isLogin={false} onSubmit={handleRegister} />;
};

export default Register;
