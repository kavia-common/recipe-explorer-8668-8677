import React, { useState } from 'react';
import '../styles/common.css';
import '../styles/signIn.css';

/**
 * PUBLIC_INTERFACE
 * SignIn
 * A React component rendering the Sign In screen converted from Figma assets.
 * Props: none
 * Returns: JSX for the Sign In screen with basic interactivity (alerts only).
 */
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const onForgot = (e) => {
    e.preventDefault();
    alert('Forgot Password? Placeholder action');
  };

  const onGoogle = () => alert('Google Sign-In placeholder');
  const onFacebook = () => alert('Facebook Sign-In placeholder');

  const onSubmit = () => {
    if (!email || !pwd) {
      alert('Please enter email and password.');
      return;
    }
    console.log('Sign In clicked', { email, pwd });
    alert('Sign In clicked');
  };

  return (
    <div className="mobile-frame">
      <div className="screen-root" role="document" aria-label="Sign In Screen">
        <div className="status-bar" aria-hidden="true"></div>

        <section className="title-group" aria-labelledby="hello-text welcome-text">
          <h1 id="hello-text" className="title-hello">Hello,</h1>
          <p id="welcome-text" className="title-welcome">Welcome Back!</p>
        </section>

        <div className="input-field input-email">
          <label className="input-label" htmlFor="signin-email">Email</label>
          <div className="input-rect"></div>
          <input
            id="signin-email"
            className="input-control"
            type="email"
            placeholder="Enter Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </div>

        <div className="input-field input-password">
          <label className="input-label" htmlFor="signin-password">Enter Password</label>
          <div className="input-rect"></div>
          <input
            id="signin-password"
            className="input-control"
            type="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            aria-label="Password"
          />
        </div>

        <a className="forgot-password" href="#" onClick={onForgot} aria-label="Forgot Password link">
          Forgot Password?
        </a>

        <button className="primary-btn" type="button" aria-label="Sign In" onClick={onSubmit}>
          <span className="label">Sign In</span>
          <span className="icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10h13.333" stroke="#000000" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M11.8 5l4.2 5-4.2 5" fill="none" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>

        <div className="divider" role="separator" aria-label="Or Sign in With">
          <div className="divider-line-left" aria-hidden="true"></div>
          <div className="divider-line-right" aria-hidden="true"></div>
          <div className="divider-text">Or Sign in With</div>
        </div>

        <button className="social-btn social-google" type="button" aria-label="Sign in with Google" onClick={onGoogle}>
          <svg className="google-icon" viewBox="0 0 20 20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#ffc107" d="M19.6 10.227c0-.68-.061-1.333-.175-1.96H10v3.708h5.395a4.615 4.615 0 0 1-2.006 3.03v2.514h3.24c1.894-1.746 2.971-4.316 2.971-7.292z"/>
            <path fill="#ff3d00" d="M10 20c2.7 0 4.965-.897 6.62-2.437l-3.239-2.514c-.898.602-2.05.958-3.38.958-2.599 0-4.8-1.756-5.584-4.115H1.02v2.587C2.663 17.983 6.06 20 10 20z"/>
            <path fill="#4caf50" d="M4.416 11.892A6.005 6.005 0 0 1 4.1 10c0-.655.113-1.288.316-1.892V5.521H1.02A9.987 9.987 0 0 0 0 10c0 1.602.383 3.115 1.02 4.479l3.396-2.587z"/>
            <path fill="#1976d2" d="M10 3.958c1.468 0 2.787.506 3.826 1.498l2.871-2.871C14.964.997 12.7 0 10 0 6.06 0 2.663 2.017 1.02 5.521l3.396 2.587C5.2 5.748 7.401 3.958 10 3.958z"/>
          </svg>
        </button>

        <button className="social-btn social-facebook" type="button" aria-label="Sign in with Facebook" onClick={onFacebook}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.58">
              <rect width="24" height="24" rx="0" fill="#000000" opacity="0"/>
            </g>
            <path d="M14.5 8H16V5.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5V11H9v2.5h2v5h2.5v-5h2l.5-2.5h-2.5V9c0-.552.448-1 1-1z" fill="#035b81"/>
          </svg>
        </button>

        <p className="signup-cta">Don’t have an account? Sign up</p>

        <div className="home-indicator" aria-hidden="true"></div>
      </div>
    </div>
  );
}
