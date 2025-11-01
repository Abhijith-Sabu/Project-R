import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useAuth } from '../context/AuthContext.jsx';
import "../styles/top.css";

export default function Top() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [signingOut, setSigningOut] = useState(false);

    const handleSignOut = async () => {
        if (signingOut) {
            return;
        }

        setSigningOut(true);
        try {
            await signOut(auth);
            navigate('/signup', { replace: true });
        } catch (error) {
            console.error('Error signing out:', error);
        } finally {
            setSigningOut(false);
        }
    };

    const handleSignInRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="top">
            <div className="name">
                <title>Project R</title>
                <h1>Project R</h1>
            </div>
            <div className="user-info">
                {user ? (
                    <>
                        <div className="user-details">
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="User avatar" referrerPolicy="no-referrer" />
                            ) : (
                                <div className="user-avatar-placeholder">
                                    {user.displayName?.charAt(0)?.toUpperCase() ?? user.email?.charAt(0)?.toUpperCase() ?? '?'}
                                </div>
                            )}
                            <span>{user.displayName ?? user.email}</span>
                        </div>
                        <button
                            className="signout-button"
                            onClick={handleSignOut}
                            disabled={signingOut}
                        >
                            {signingOut ? 'Signing out...' : 'Sign out'}
                        </button>
                    </>
                ) : (
                    <button className="signout-button" onClick={handleSignInRedirect}>
                        Sign in
                    </button>
                )}
            </div>
        </div>
    );
}