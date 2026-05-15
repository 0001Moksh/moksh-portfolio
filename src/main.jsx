import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';
import Loader from './components/Loader'; // adjust the path as per your folder

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep a short loading phase without forcing a long startup delay.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  </StrictMode>
);
