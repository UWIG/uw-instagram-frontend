import { media } from '../components/post/postType';

export type loginType ={
    onLogin: any;
}

export type userType = {
    username: string,
    fullname:string,
    avatar: media,
    following:boolean,
    followingType: boolean,
}

export type userItemType = {
    username: string,
    fullname:string,
    avatar: media,
    following:boolean,
    followingType: boolean,
    onClose:()=>void,
}


