export interface IUser {
    id : string,
    firstName: string,
    lastName: string,
    email: string
}

export const dummyUserList : IUser[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: "Dummy1",
        lastName: "Dummy11",
        email: "dummy@gmail.com"
        },
    ];

export enum PageEnum {
    list,
    add,
    edit
    
}