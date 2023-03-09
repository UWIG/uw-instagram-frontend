export type postComment = {
    id:object_id,
    username:string,
    comment:string,
    avatar:string,
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
    avatar:string,
    mediaList: media[],
  }

export type postHeader = {
    username:string,
    avatar:string,
    time_created:string,
  }


export type postActions = {
  likes:number,
  onComment?: () => void,
}

export type postComments = {
  comments: postComment[]
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
  avatar:string,
}

export type postImage = {
  mediaList:media[],
  caption?:string,
}

export type postModal = {
  id:string,
  username:string,
  avatar:string,
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

export type postModalComment = {
  username:string,
  avatar:string,
  caption: string,
  time_created: string,
  comments: postComment[],
}