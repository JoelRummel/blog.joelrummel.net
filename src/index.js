import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const theme = createTheme({
    palette: {
        primary: {
            main: '#a65a4b'
        },
        secondary: {
            main: '#4b97a6'
        },
        background: {
            default: '#4b97a6'
        }
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        h1: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h2: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h3: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h4: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h5: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        h6: {
            fontFamily: ['Play', 'sans-serif'].join(',')
        },
        body2: {
            color: 'grey'
        },
        link: {
            color: '#4b97a6'
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Home />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
