import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './containers/auth';
import * as euiVars from '@elastic/eui/dist/eui_theme_light.json';
import '@elastic/eui/dist/eui_theme_dark.css';
import moment from 'moment';

import 'moment/locale/ru';
moment.locale('ru');

ReactDOM.render(
    <AuthProvider>
        <React.StrictMode>
            <ThemeProvider theme={euiVars}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </AuthProvider>,
    document.getElementById('root')
);

reportWebVitals();
