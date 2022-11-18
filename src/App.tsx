import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router/Router';

import './App.scss';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};
