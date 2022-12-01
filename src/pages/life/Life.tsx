import { FC } from 'react';

import { Box, Heading, Image, Text } from '@chakra-ui/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { useData } from 'common/data/Data';

export const Life: FC = () => {
    const { data } = useData();

    return (
        <Box my={{ base: 0, md: 4 }} w="100%" gap={{ base: 4, md: 8 }} h="100%" flexDirection="column" className="life">
            <Box mb="8">
                <Heading fontSize="xl">A little about me</Heading>
                <Text pt="2" fontWeight="500">
                    {data.life.description} {data.life.link}
                </Text>
            </Box>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3 }} style={{ width: '100%' }}>
                <Masonry gutter="20px">
                    {data.life.images.map((life) => {
                        return (
                            <Box key={life.id.toString()} pos="relative" className="gallery-box">
                                <Image borderRadius="xl" src={life.src} display="block" w="100%" />
                                <Text pt="2" fontWeight="500">
                                    {life.caption}
                                </Text>
                            </Box>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    );
};
