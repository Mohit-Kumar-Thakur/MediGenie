import { createContext, useState, useEffect, useCallback } from 'react';
import api from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => Boolean(localStorage.getItem('token')));

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const startSession = ({ token, user }) => {
    localStorage.setItem('token', token);
    setUser(user);
  };

  const register = async (formData) => {
    const res = await api.post('/auth/register', formData);
    startSession(res.data);
  };

  const login = async (formData) => {
    const res = await api.post('/auth/login', formData);
    startSession(res.data);
  };

  // Restore the session from a stored token on first load.
  useEffect(() => {
    if (!localStorage.getItem('token')) return;
    api
      .get('/auth/profile')
      .then((res) => setUser(res.data))
      .catch(logout)
      .finally(() => setLoading(false));
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
