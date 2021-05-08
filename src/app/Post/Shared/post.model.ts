export interface IPost{
    PostId: number,
    UserId: number,
    postTypeId: number,
    imgUrl: string,
    title: string,
    body: string,
    postDate: Date,
}

export interface IPostType{
    postTypeId: number,
    name: string
}