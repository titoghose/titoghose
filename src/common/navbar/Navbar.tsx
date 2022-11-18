import { FC } from 'react';

import { Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useData } from 'common/data/Data';
import { RouteName } from 'router/Router.types';

export const Navbar: FC = () => {
    const { data } = useData();
    
    return (
        <Flex gap="8" justifyContent="center" alignItems="center" p="6" borderBottom="1px solid black" fontWeight="700">
            <Link as={NavLink} to={RouteName.AboutMe} _activeLink={{ color: 'brand' }}>
                About Me
            </Link>
            <Link as={NavLink} to={RouteName.Research} _activeLink={{ color: 'brand' }}>
                Research
            </Link>
            <Link isExternal onClick={() => window.open(data.cv)}>
                CV
            </Link>
        </Flex>
    );
};
