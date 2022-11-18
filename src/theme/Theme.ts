import { ThemeConfig, extendTheme, withDefaultColorScheme, theme as ChakraTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'tg',
};

const fonts = {
    body: "'Plus Jakarta Sans', sans-serif",
    heading: "'Libre Baskerville', sans-serif",
};

const fontWeights = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 500,
    medium: 600,
    semibold: 700,
    bold: 800,
    extrabold: 900,
    black: 900,
};

export const bgLight = 'white';

export const theme = extendTheme(
    {
        config,
        fonts,
        fontWeights,
        colors: {
            brand: ChakraTheme.colors.orange[500],
        },
    },
    withDefaultColorScheme({ colorScheme: 'orange' }),
);
