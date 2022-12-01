import { FC, Fragment } from 'react';

import { Box, Button, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { useData } from 'common/data/Data';
import { Project } from 'common/data/Data.api';
import { Footer } from 'common/footer/Footer';
import { RouteName } from 'router/Router.types';

export const Research: FC = () => {
    const { data } = useData();

    const ProjectItem: FC<Project> = ({ image, title, description, link, code }) => {
        return (
            <Flex gap="6" flexDir={{ base: 'column', md: 'row' }}>
                <Image
                    src={image}
                    alt={`image-${title}`}
                    h={{ base: '300px', md: '360px' }}
                    w={{ base: '100%', md: '240px' }}
                    borderRadius="xl"
                    objectFit="contain"
                />
                <Flex flexDir="column" justifyContent="center" py="2">
                    <Box>
                        <Text fontSize="lg" fontWeight="700">
                            {title}
                        </Text>
                        <Text fontWeight="500" align="justify">
                            {description}
                        </Text>
                    </Box>
                    <Flex gap="4">
                        <Button variant="link" mt="4" justifyContent="flex-start" onClick={() => window.open(link)}>
                            Read More
                        </Button>
                        {code && (
                            <Button variant="link" mt="4" justifyContent="flex-start" onClick={() => window.open(code)}>
                                Code
                            </Button>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        );
    };

    return (
        <Box h="100%" w="100%">
            <Stack spacing="6">
                {data.projects.map((project, index) => (
                    <Fragment key={project.id}>
                        <ProjectItem {...project} />
                        {index !== data.projects.length - 1 && <Divider borderColor="#ececec" borderWidth="2px" />}
                    </Fragment>
                ))}
            </Stack>
            <Footer prevLink={RouteName.AboutMe} prevText="Back to About Me" pt="16" />
        </Box>
    );
};
