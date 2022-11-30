import { FC } from 'react';

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { useData } from 'common/data/Data';

export const AboutMe: FC = () => {
    const { data } = useData();

    return (
        <Flex
            my={{ base: 0, md: 4 }}
            w="100%"
            gap={{ base: 4, md: 8 }}
            h="100%"
            flexDirection={{ base: 'column', md: 'row' }}
        >
        </Flex>
    );
};
