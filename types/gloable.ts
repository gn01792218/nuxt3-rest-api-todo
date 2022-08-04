export interface Todo{
    id:string,
    title:string,
    description:string,
    finished:boolean
}
export enum MsgType{
    SUCCESS,
    ERROR,
}
export interface Msg{
    msgType:MsgType,
    message:string,
}

export enum ApiMethods{
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}