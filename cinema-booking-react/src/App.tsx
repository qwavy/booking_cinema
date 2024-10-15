import React from 'react';
import PageLayout from "@/components/ui/PageLayout/PageLayout.tsx";
import Register from "@/pages/auth/Register/Register.tsx";

import './index.css'
import './App.css'

const App = () => {
    return (
        <PageLayout>
            <Register/>
        </PageLayout>
    );
};

export default App;