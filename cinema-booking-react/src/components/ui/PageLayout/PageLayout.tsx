import React from 'react';
import './PageLayout.css'
import '@/index.css'
import '@/App.css'
import { Outlet } from 'react-router-dom';
import Header from "@/components/ui/Header/Header.tsx";


const PageLayout= ():JSX.Element => {
    return (
        <div className="page">
            <Header/>
            <main className="main">
                <Outlet/>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default PageLayout;