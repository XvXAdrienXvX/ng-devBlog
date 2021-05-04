export interface IPost{
    id: number,
    name: string,
    logo: string,
    Category: ICategory,
    Date: Date,
    Description: string,
    Content: string
}

export interface ICategory{
    id: number,
    name: string
}