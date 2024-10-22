interface MovieInfo{
    id:number,
    title:string,
    image:string,
    release_date:string,
    genres:string[],
    duration:number
}
interface MoviePrice {
    adult_price:number,
    student_price:number,
    child_price:number
}

interface MovieSessionsSeats{
    row:string,
    taked_seats:string[]
}

interface MovieSessions{
    id:number,
    cinema_name:string,
    time:string,
    hall:number,
    price:MoviePrice,
    seats:MovieSessionsSeats[]
}


export interface Movie{
    movie_info:MovieInfo,
    movie_sessions:MovieSessions[]
}