import { FC, lazy, Suspense } from 'react';

import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { RouteName } from 'router/Router.types';
import { Navbar } from 'common/navbar/Navbar';

const AboutMePage = lazy(() => import('pages/about-me/AboutMe').then((module) => ({ default: module.AboutMe })));
const ResearchPage = lazy(() => import('pages/research/Research').then((module) => ({ default: module.Research })));

export const Router: FC = () => {
    return (
        <>
            <Navbar />

            <Suspense fallback={null}>
                <Container maxW="6xl" py="4">
                    <Routes>
                        <Route path={RouteName.AboutMe} element={<AboutMePage />} />
                        <Route path={RouteName.Research} element={<ResearchPage />} />
                    </Routes>
                </Container>
            </Suspense>
        </>
    );
};
