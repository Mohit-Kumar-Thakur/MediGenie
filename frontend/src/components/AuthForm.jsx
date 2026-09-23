import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { getErrorMessage } from '../api';
import Logo from './Logo';

const AuthForm = ({ isLogin, onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { email, password, username } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await onSubmit(isLogin ? { email, password } : { email, password, username });
    } catch (err) {
      setError(getErrorMessage(err));
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit} noValidate={false}>
        <div className="auth-head">
          <Logo size={40} />
          <h1>{isLogin ? 'Welcome back' : 'Create your account'}</h1>
          <p>{isLogin ? 'Log in to continue to MediGenie.' : 'Join MediGenie to personalise your health journey.'}</p>
        </div>

        {error && <div className="alert alert-error" role="alert">{error}</div>}

        {!isLogin && (
          <label className="field">
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="jane_doe"
              pattern="[a-zA-Z0-9_]{3,30}"
              title="3-30 characters: letters, numbers and underscores"
              autoComplete="username"
              required
            />
          </label>
        )}

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="••••••••"
            minLength={isLogin ? undefined : 8}
            autoComplete={isLogin ? 'current-password' : 'new-password'}
            required
          />
          {!isLogin && (
            <small className="hint">
              At least 8 characters with uppercase, lowercase, a number and a symbol (@$!%*?&).
            </small>
          )}
        </label>

        <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
          {submitting && <Loader2 size={18} className="spin" />}
          {isLogin ? 'Log in' : 'Create account'}
        </button>

        <p className="auth-switch">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <Link to={isLogin ? '/register' : '/login'}>{isLogin ? 'Sign up' : 'Log in'}</Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
