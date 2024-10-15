import React from 'react';
import './PageLayout.css'
import '@/index.css'
import '@/App.css'
import { Outlet } from 'react-router-dom';


const PageLayout= ():JSX.Element => {
    return (
        <div className="page">
            <header>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default PageLayout;