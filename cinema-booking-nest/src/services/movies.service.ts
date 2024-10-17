import {Injectable} from "@nestjs/common";
import {Movie} from "../interfaces/movies";
@Injectable()
export class MoviesService{
    private mockData: Movie[] = [
        {
            movie_info: {
                id: 1,
                title: "Inception",
                image: "https://example.com/inception.jpg",
                release_date: "2010-07-16",
                genres: ["Sci-Fi", "Thriller"],
                duration: 148
            },
            movie_sessions: {
                id: 101,
                cinema_name: "Cinema City",
                time: "2024-10-20T19:00:00Z",
                hall: 1,
                price: {
                    adult_price: 12.5,
                    student_price: 9.5,
                    child_price: 7.0
                },
                seats: [
                    { row: "A", taked_seats: ["1", "2", "3"] },
                    { row: "B", taked_seats: ["4", "5"] }
                ]
            }
        },
        {
            movie_info: {
                id: 2,
                title: "Interstellar",
                image: "https://example.com/interstellar.jpg",
                release_date: "2014-11-07",
                genres: ["Adventure", "Drama", "Sci-Fi"],
                duration: 169
            },
            movie_sessions: {
                id: 102,
                cinema_name: "Grand Cinema",
                time: "2024-10-21T21:30:00Z",
                hall: 2,
                price: {
                    adult_price: 13.0,
                    student_price: 10.0,
                    child_price: 8.0
                },
                seats: [
                    { row: "A", taked_seats: ["6", "7", "8"] },
                    { row: "C", taked_seats: ["2", "3", "9"] }
                ]
            }
        }
    ];

    getMovies(): Movie[] {
        return this.mockData
    }
}