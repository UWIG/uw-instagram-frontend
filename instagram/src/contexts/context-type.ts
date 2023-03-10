export interface UserContextType{
    username:string,
    avatar:string,
    fullname:string
    setUser: (user:any) => void;
}