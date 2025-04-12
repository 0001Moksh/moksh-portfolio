// src/components/Loader.jsx
import React from 'react';

function Loader({ speed = '1.5s', color = 'rgb(164 93 72 / var(--tw-text-opacity, 1))' }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2 text-xl font-mono text-gray-900">
        <span className="dot" style={{ animationDuration: speed, backgroundColor: color }}></span>
        <span className="dot" style={{ animationDuration: speed, backgroundColor: color }}></span>
        <span className="dot" style={{ animationDuration: speed, backgroundColor: color }}></span>
      </div>

      <style jsx>{`
        .dot {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 80%;
          opacity: 0;
          animation: pulse 1.5s infinite ease-in-out;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.5s;
        }

        .dot:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
