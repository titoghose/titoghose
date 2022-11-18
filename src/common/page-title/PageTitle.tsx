import { FC, ReactNode } from 'react';

import { Heading } from '@chakra-ui/react';

export const PageTitle: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Heading fontSize="lg" color="gray.500">
            {children}
        </Heading>
    );
};
