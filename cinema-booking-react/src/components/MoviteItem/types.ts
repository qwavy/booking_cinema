export interface MovieItemProps {
    item:IMovieItem
}
export interface IMovieItem {
    id:number,
    image:string,
    title:string,
    genres:string[],
    release_date:string,
    duration:number,
}