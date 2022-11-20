import { FC } from 'react';

import { HashRouter } from 'react-router-dom';

import { DataProvider } from 'common/data/Data';
import { Router } from 'router/Router';

import './App.scss';

export const App: FC = () => {
    return (
        <HashRouter>
            <DataProvider>
                <Router />
            </DataProvider>
        </HashRouter>
    );
};
