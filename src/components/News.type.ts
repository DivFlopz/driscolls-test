export interface INews {
    id : string,
    title: string,
    subtitle: string,
    publisher: string
}

export const dummyNewsList : INews[] = [
    {
    id: new Date().toJSON().toString(),
    title: "Dummy News",
    subtitle: "Dummy News",
    publisher: "dummy@gmail.com"
    },
    {
    id: new Date().toJSON().toString(),
    title: "Dummy News",
    subtitle: "Dummy News 2",
    publisher: "dummy@gmail.com"
    },
    {
    id: new Date().toJSON().toString(),
    title: "Dummy News",
    subtitle: "Dummy News 2",
    publisher: "dummy@gmail.com"
    },
    {
    id: new Date().toJSON().toString(),
    title: "Dummy News",
    subtitle: "Dummy News 3",
    publisher: "dummy@gmail.com"
    },
];

export enum PageEnum {
    list    
}