export interface UserData {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface ImageData{
    _id:string,
    title:string ,
    image:File | string | null
}