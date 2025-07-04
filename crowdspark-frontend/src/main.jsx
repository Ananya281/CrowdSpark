import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx'; // ✅ import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { AuthProvider } from './context/AuthContext';

// createRoot(document.getElementById('root')).render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// );
