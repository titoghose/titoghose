import { FC } from 'react';

import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Prev {
    nextLink?: string;
    nextText?: string;
    prevLink: string;
    prevText: string;
}

interface Next {
    nextLink: string;
    nextText: string;
    prevLink?: string;
    prevText?: string;
}

type Props =
    | (Prev | Next) & {
          pt?: string;
      };

export const Footer: FC<Props> = ({ nextLink, nextText, prevLink, prevText, pt = '8' }) => {
    const navigate = useNavigate();

    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            pt={pt}
            gap="6"
            flexDirection={{ base: 'column', md: 'row' }}
        >
            {prevLink && (
                <Button size="sm" fontWeight="500" variant="link" onClick={() => navigate(prevLink)}>
                    {prevText}
                </Button>
            )}

            {nextLink ? (
                <Button size="sm" fontWeight="500" variant="link" onClick={() => navigate(nextLink)}>
                    {nextText}
                </Button>
            ) : (
                <></>
            )}
        </Flex>
    );
};
