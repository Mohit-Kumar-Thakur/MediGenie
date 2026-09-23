import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) return <Navigate to="/dashboard" replace />;

  const handleLogin = async (formData) => {
    await login(formData);
    navigate('/dashboard');
  };

  return <AuthForm isLogin onSubmit={handleLogin} />;
};

export default Login;
