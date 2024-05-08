import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './styles/index.scss'
import LangProvider from './providers/LangProvider.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
