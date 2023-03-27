export type postComment = {
    id:object_id,
    username:string,
    comment:string,
    avatar:media,
    time_created:string,
}

export type object_id = {
  date:string,
  timestamp: number
}

export type media = {
  id: object_id,
  data:{
    data:string,
    type:number
  }
}

export type postType = {
    id:string,
    username:string,
    likes:number,
    comments: postComment[],
    caption:string,
    location?:string,
    time_created:string,
    time_modified?:string,
    type?:string,
    onCreateComment?:any;
    avatar:media,
    mediaList: media[],
  }

export type postHeader = {
    username:string,
    avatar:media,
    time_created:string,
  }


export type postActions = {
  likes:number,
  onComment?: () => void,
}

export type postComments = {
  comments: postComment[],
  onExpandComments: () => void,
}

export type postFooter = {
  username:string,
  caption:string
}

export type postAddComment = {
  id:string,
  username:string,
  comment?:string,
  onCreateComment?:any,
  avatar:media,
}

export type postImage = {
  mediaList:media[],
  caption?:string,
}

export type postModal = {
  id:string,
  username:string,
  avatar:media,
  time_created:string,
  open:boolean,
  onClose: () => void,
  mediaList:media[],
  comments:postComment[],
  caption: string,
  likes: number,
  opacity:string,
  onCreateComment: () => void,
}

export type postModalComments = {
  username:string,
  avatar:media,
  caption: string,
  time_created: string,
  comments: postComment[],
}

export type postModalComment = {
  comment: postComment
}

export type postEmoji = {
  open: boolean,
  setOpen: (open: boolean) => void,
  comment: string,
  setComment: (comment: string) => void,
  pos_x: number | undefined,
  pos_y: number | undefined,
}