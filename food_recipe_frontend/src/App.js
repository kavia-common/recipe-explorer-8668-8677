import React from 'react';
import './App.css';
import './styles/common.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Search from './components/Search';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component that renders a simple navigation and routes between screens.
 * This implementation uses a minimal hash-based router to avoid extra deps.
 */
function App() {
  const [route, setRoute] = React.useState(() => window.location.hash.replace('#', '') || '/signin');

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/signin');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  const Link = ({ to, children }) => (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      className={route === to ? 'active' : undefined}
    >
      {children}
    </a>
  );

  const Screen = () => {
    switch (route) {
      case '/signin':
        return <SignIn />;
      case '/signup':
        return <SignUp />;
      case '/search':
        return <Search />;
      default:
        return <SignIn />;
    }
  };

  return (
    <div className="App">
      <nav className="topnav" aria-label="Main navigation">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/search">Search</Link>
      </nav>
      <div className="app-body">
        <div className="screen-container" role="main" aria-live="polite">
          <Screen />
        </div>
      </div>
      <div className="app-footer">
        Recipe Explorer — Figma screens rendered as React components
      </div>
    </div>
  );
}

export default App;
