import { FC } from 'react';

import { useData } from 'common/data/Data';

export const AboutMe: FC = () => {
    const { data } = useData();

    return <>{data.about}</>;
};
