import { FC } from 'react';

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Github, Linkedin, FileText } from 'lucide-react';

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
            <Flex justifyContent="center" w="100%">
                <Image
                    w={{ base: '200px', md: '400px' }}
                    h={{ base: '200px', md: '400px' }}
                    objectFit="cover"
                    src={data.picture}
                    borderRadius={{ base: '50%', md: 'xl' }}
                />
            </Flex>
            <Box flexGrow={1}>
                <Heading fontSize="4xl" textAlign={{ base: 'center', md: 'left' }}>
                    {data.name}
                </Heading>
                <Text fontWeight="600" textAlign={{ base: 'center', md: 'left' }} color="gray">
                    {data.title}
                </Text>
                <Text pt="2" fontWeight="500">
                    {data.about}
                </Text>

                <Flex mt="8" gap="4" flexDirection={{ base: 'column', md: 'row' }}>
                    <Button
                        variant="outline"
                        leftIcon={<Github width="16pt" />}
                        onClick={() => window.open(data.github)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon={<Linkedin width="16pt" />}
                        onClick={() => window.open(data.linkedin)}
                        borderWidth="2px"
                        size={{ base: 'lg', md: 'md' }}
                    >
                        LinkedIn
                    </Button>
                    <Button
                        leftIcon={<FileText width="16pt" />}
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
