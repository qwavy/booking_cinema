export interface IMovieSession{
    id:number,
    hall:number,
    time:string,
    cinema_name:string,
    price: Price
}

interface Price{
    adult_price:number,
    student_price:number,
    child_price:number
}

export interface MovieSessionsProps {
    sessions:MovieSession[]
}

