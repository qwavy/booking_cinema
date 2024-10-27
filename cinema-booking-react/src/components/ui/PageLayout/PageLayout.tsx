import React from 'react';
import styles from './PageLayout.module.css'
import '@/index.css'
import '@/App.css'
import { Outlet } from 'react-router-dom';
import Header from "@/components/ui/Header/Header.tsx";


const PageLayout= ():JSX.Element => {
    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default PageLayout;