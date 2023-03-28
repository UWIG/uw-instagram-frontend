export type modalType = {
    open: boolean,
    onClose: () => void,
    onCreatePost: () => void,
}

export type sidebarType = {
    onCreatePost: () => void,
}

export type thumbnailType = {
    imgs: string[],
    imgIdx: number,
    setImgIdx: any,
    handleFileChange: any,
    handleDelete: () => void,
}

export type modelFormType = {
    caption:string,
    setCaption: any,
    setHashtags: any,
}