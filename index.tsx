import ReactDOM from 'react-dom/client';
import { App } from './src/App';
import './src/assets/styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './src/theme/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
  </BrowserRouter>

)