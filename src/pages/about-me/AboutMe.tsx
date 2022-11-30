import { FC } from 'react';

import { Box, Button, Flex, Heading, Image, Text, Link } from '@chakra-ui/react';
import { Github, Linkedin, FileText, Book, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useData } from 'common/data/Data';
import { RouteName } from 'router/Router.types';

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
            <Flex justifyContent="center" flex='0.3'>
                <Image
                    w={{ base: '200px', md: '400px' }}
                    h={{ base: '200px', md: '400px' }}
                    objectFit="cover"
                    src={data.picture}
                    borderRadius={{ base: '50%', md: 'xl' }}
                />
            </Flex>
            <Box flex='0.7'>
                <Heading fontSize="4xl" textAlign={{ base: 'center', md: 'left' }}>
                    {data.name}
                </Heading>
                <Text fontWeight="600" textAlign={{ base: 'center', md: 'left' }} color="gray" pt='1'>
                    {data.title}
                </Text>
                <Flex mt="8" gap="4" flexDirection={{ base: 'column', md: 'row' }}>
                    <Button
                        variant="outline"
                        leftIcon={<Github width="8pt" />}
                        onClick={() => window.open(data.github)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Linkedin width="8pt" />}
                        onClick={() => window.open(data.linkedin)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Book width="8pt" />}
                        onClick={() => window.open(data.google_scholar)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        G-Scholar
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Mail width="8pt" />}
                        onClick={() => window.open(data.email)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        Mail
                    </Button>
                    <Button
                        leftIcon={<FileText width="8pt" />}
                        onClick={() => window.open(data.cv)}
                        borderWidth="2px"
                        borderColor="brand"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        CV
                    </Button>
                </Flex>
                <Text mt="4" align="justify" fontWeight="500">
                    {data.about}
                </Text>
                <Text mt="4" align="justify" fontWeight="500">
                    Beyond my research interests, I enjoy {' '}
                    <Link as={NavLink} to={RouteName.Life} color="orange.500">
                        cooking, swimming, trekking, cycling, and playing the guitar.
                    </Link>
                </Text>
            </Box>
        </Flex>
    );
};
