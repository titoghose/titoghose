import { FC, createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { Center, Spinner } from '@chakra-ui/react';

import { DataType, readData } from 'common/data/Data.api';

interface DataContextType {
    data: DataType;
    loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await readData();

            setLoading(false);
            setData(data);
        })();
    }, []);

    return (
        <DataContext.Provider value={{ data: data!, loading }}>
            {loading ? (
                <Center h="100%">
                    <Spinner size="xl" />
                </Center>
            ) : (
                <>{children}</>
            )}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);

    if (context === undefined) {
        throw new Error('useData must be within DatProvider');
    }

    return context;
};
