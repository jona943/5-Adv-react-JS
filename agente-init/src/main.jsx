import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Archivo de estilos tailwindcss
import App from './App.jsx'
import { ChatProvedor } from './components/ChatContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvedor>
      <App />
    </ChatProvedor>
  </StrictMode>,
)
