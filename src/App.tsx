import { FC, ReactNode, useLayoutEffect } from 'react';

import { HashRouter, useLocation } from 'react-router-dom';

import { DataProvider } from 'common/data/Data';
import { Router } from 'router/Router';

import './App.scss';

const ScrollWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{children}</>;
};

export const App: FC = () => {
    return (
        <HashRouter>
            <ScrollWrapper>
                <DataProvider>
                    <Router />
                </DataProvider>
            </ScrollWrapper>
        </HashRouter>
    );
};
