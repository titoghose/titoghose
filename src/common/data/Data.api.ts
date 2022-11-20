export interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

export interface DataType {
    name: string;
    title: string;
    about: string;
    picture: string;
    github: string;
    linkedin: string;
    cv: string;
    projects: Project[];
}

export const readData = async (): Promise<DataType> => {
    const request = await fetch('https://raw.githubusercontent.com/titoghose/titoghose/main/public/data.json');
    const data = await request.json();

    return data;
};
