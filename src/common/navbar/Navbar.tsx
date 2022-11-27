import { FC } from 'react';

import { Box, Flex, Link, useBreakpointValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useData } from 'common/data/Data';
import { RouteName } from 'router/Router.types';

export const Navbar: FC = () => {
    const { data } = useData();
    const showTopText = useBreakpointValue({ base: false, md: true });

    return (
        <>
            <Box bg="orange.50" fontSize="xs" color="brand" p="3" fontWeight="800" textAlign="center">
                {data?.name} {showTopText && ` - ${data?.title}`}
            </Box>
            <Flex
                gap="8"
                justifyContent="center"
                alignItems="center"
                p="6"
                borderBottom="2px solid black"
                fontWeight="700"
            >
                <Link as={NavLink} to={RouteName.AboutMe} _activeLink={{ color: 'brand' }}>
                    About Me
                </Link>
                <Link as={NavLink} to={RouteName.Research} _activeLink={{ color: 'brand' }}>
                    Research & Projects
                </Link>
                <Link isExternal onClick={() => window.open(data.cv)}>
                    CV
                </Link>
            </Flex>
        </>
    );
};
