import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import Top from '../top.jsx';
import Bottom from '../bottom.jsx';
import '../../styles/signup.css';

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        navigate('/', { replace: true });
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleGoogleSignup = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate('/', { replace: true });
    } catch (err) {
      const message = err?.message ?? 'Unable to sign in with Google right now.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <Top />
      <main className="signup-content">
        <section className="signup-card">
          <h2>Sign up with Google</h2>
          <p>Connect your Google account to start managing your receipts securely.</p>
          <button
            className="google-button"
            onClick={handleGoogleSignup}
            disabled={loading}
          >
            {loading ? 'Connecting...' : 'Continue with Google'}
          </button>
          {error && <p className="signup-error">{error}</p>}
        </section>
      </main>
      <Bottom />
    </div>
  );
}
