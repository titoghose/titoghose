export interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    code?: string;
}

export interface DataType {
    name: string;
    title: string;
    about: string;
    picture: string;
    github: string;
    linkedin: string;
    google_scholar: string;
    cv: string;
    projects: Project[];
}

const DATA_URL_DEV = './data.json';
const DATA_URL_PROD = 'https://raw.githubusercontent.com/titoghose/titoghose/main/public/data.json';

export const readData = async (): Promise<DataType> => {
    const request = await fetch(process.env.NODE_ENV === 'development' ? DATA_URL_DEV : DATA_URL_PROD);
    const data = await request.json();

    return data;
};
