import { FC } from 'react';

import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { useData } from 'common/data/Data';
import { Project } from 'common/data/Data.api';

export const Research: FC = () => {
    const { data } = useData();

    const ProjectItem: FC<Project> = ({ image, title, description, link }) => {
        return (
            <Flex gap="4" flexDir={{ base: 'column', md: 'row' }}>
                <Image
                    src={image}
                    h={{ base: '300px', md: '240px' }}
                    w={{ base: '100%', md: '240px' }}
                    borderRadius="xl"
                    objectFit="cover"
                />
                <Flex flexDir="column" justifyContent="space-between" py="2">
                    <Box>
                        <Text fontSize="lg" fontWeight="700">
                            {title}
                        </Text>
                        <Text fontWeight="500" noOfLines={6}>
                            {description}
                        </Text>
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
            <Stack spacing="10">
                {data.projects.map((project) => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </Stack>
        </Box>
    );
};
