import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { DataProvider } from 'common/data/Data';
import { Router } from 'router/Router';

import './App.scss';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Router />
            </DataProvider>
        </BrowserRouter>
    );
};
