// import 'tailwindcss/tailwind.css'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/globals.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>,
)
