import {createBrowserRouter} from "react-router-dom";
import PageLayout from "@/components/UI/PageLayout/PageLayout.tsx";
import Register from "@/pages/auth/Register/Register.tsx";
import Login from "@/pages/auth/Login/Login.tsx";
import MoviePage from "@/components/MoviePage/MoviePage.tsx";
import MovieSeats from "@/components/MovieSeats/MovieSeats.tsx";
import HomePage from "@/pages/HomePage/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout/>,
        children:[
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/home",
                element:<HomePage/>
            },
            {
                path: "/moviePage/:id",
                element:<MoviePage/>
            },
            {
                path:"/moviePage/:id/movieSeats/:seatId",
                element:<MovieSeats/>
            }
        ]
    }
]);