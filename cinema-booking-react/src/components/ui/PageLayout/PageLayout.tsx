import React from 'react';
import './PageLayout.css'
import '@/index.css'
import '@/App.css'

const PageLayout:React.FC = ({children}) => {
    return (
        <div className="page">
            <header>
            </header>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default PageLayout;