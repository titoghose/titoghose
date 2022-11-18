export interface DataType {
    name: string;
    title: string;
    about: string;
    github: string;
    linkedin: string;
    cv: string;
}

export const readData = async (): Promise<DataType> => {
    const request = await fetch('./data.json');
    const data = await request.json();

    return data;
};
