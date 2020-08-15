export interface IProject {
    images: IImage[];
    name: string;
    timeSpent: string;
    numContributors: number;
    role: string;
    description: string;
}

export interface IImage {
    src: string;
    alt: string;
}