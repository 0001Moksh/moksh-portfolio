import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Loader from './components/Loader'; // adjust the path as per your folder

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate 1.5s loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
