import { FC, lazy, Suspense } from 'react';

import { Center, Container, Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { RouteName } from 'router/Router.types';
import { Navbar } from 'common/navbar/Navbar';

const AboutMePage = lazy(() => import('pages/about-me/AboutMe').then((module) => ({ default: module.AboutMe })));
const ResearchPage = lazy(() => import('pages/research/Research').then((module) => ({ default: module.Research })));
const LifePage = lazy(() => import('pages/life/Life').then((module) => ({ default: module.Life })));

export const Router: FC = () => {
    return (
        <>
            <Navbar />
            <Container maxW="6xl" py="8">
                <Suspense
                    fallback={
                        <Center>
                            <Spinner size="xl" />
                        </Center>
                    }
                >
                    <Routes>
                        <Route path={RouteName.AboutMe} element={<AboutMePage />} />
                        <Route path={RouteName.Research} element={<ResearchPage />} />
                        <Route path={RouteName.Life} element={<LifePage />} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
};
