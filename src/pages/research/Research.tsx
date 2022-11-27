import { FC, Fragment } from 'react';

import { Box, Button, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { useData } from 'common/data/Data';
import { Project } from 'common/data/Data.api';

export const Research: FC = () => {
    const { data } = useData();

    const ProjectItem: FC<Project> = ({ image, title, description, link }) => {
        return (
            <Flex gap="6" flexDir={{ base: 'column', md: 'row' }}>
                <Image
                    src={image}
                    alt={`image-${title}`}
                    width={{ base: '100%', md: '30%' }}
                    borderRadius="xl"
                    objectFit="contain"
                />
                <Flex flexDir="column" justifyContent="space-between" py="2">
                    <Box>
                        <Text fontSize="lg" fontWeight="700">
                            {title}
                        </Text>
                        <Text fontWeight="500">{description}</Text>
                    </Box>
                    <Button variant="link" mt="4" justifyContent="flex-start" onClick={() => window.open(link)}>
                        Read More
                    </Button>
                </Flex>
            </Flex>
        );
    };

    return (
        <Box h="100%" w="100%">
            <Stack spacing="6">
                {data.projects.map((project) => (
                    <Fragment key={project.id}>
                        <ProjectItem {...project} />
                        <Divider borderColor="#ececec" borderWidth="2px" />
                    </Fragment>
                ))}
            </Stack>
        </Box>
    );
};
