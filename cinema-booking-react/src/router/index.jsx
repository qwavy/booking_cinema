import {createBrowserRouter} from "react-router-dom";
import PageLayout from "@/components/UI/PageLayout/PageLayout.tsx";
import Register from "@/pages/auth/Register/Register.tsx";
import Login from "@/pages/auth/Login/Login.tsx";
import MoviePage from "@/components/MoviePage/MoviePage.tsx";

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
                path: "/moviePage/:id",
                element:<MoviePage/>
            }
        ]
    }
]);