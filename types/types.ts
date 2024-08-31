export interface ILink {
    href: string,
    title: string
}

export interface IProject {
    id: number,
    title: string,
    description: string,
    image: string,
    gitUrl: string,
    previewUrl: string
}

export interface IProjectCard {
    imgURL: string,
    title: string,
    description: string,
    gitUrl: string,
    previewUrl: string
}

export interface ITabData {
    title: string,
    id: string,
    content: JSX.Element
}
