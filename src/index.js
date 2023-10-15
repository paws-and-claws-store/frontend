import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import './index.css';
import { StateContext } from 'context/StateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend">
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <StateContext>
          <App />
        </StateContext>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
