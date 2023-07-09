import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename */}
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
