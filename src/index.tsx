import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

export const licorice = "#130303";
export const red = "#95190C";
export const grey = "#596869";
export const palePink = "#FFCDBC";
export const paleGreen = "#C3BF6D";
const theme = createTheme({
  palette: {
    primary: {
      main: licorice,
    },
    secondary: {
      main: paleGreen
    },
    error: {
      main: red
    },
    success: {
      main: palePink
    },
    info: {
      main: grey
    }
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
