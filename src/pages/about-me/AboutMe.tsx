import { FC } from 'react';

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Github, Linkedin, FileText, Book } from 'lucide-react';

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
                <Text pt="2" fontWeight="500">
                    {data.about}
                </Text>

                <Flex mt="8" gap="4" flexDirection={{ base: 'column', md: 'row' }}>
                    <Button
                        variant="outline"
                        leftIcon={<Github width="12pt" />}
                        onClick={() => window.open(data.github)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Linkedin width="12pt" />}
                        onClick={() => window.open(data.linkedin)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Book width="12pt" />}
                        onClick={() => window.open(data.google_scholar)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        Google Scholar
                    </Button>
                    <Button
                        leftIcon={<FileText width="12pt" />}
                        onClick={() => window.open(data.cv)}
                        borderWidth="2px"
                        borderColor="brand"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        Download CV
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};
