import React from 'react';
import styles from './Header.module.css'
import Logo from "@/components/ui/Logo/Logo.tsx";
import {Link} from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"
import {Button} from "@/components/UI/button.tsx";

const Header = ():JSX.Element => {

    return (
        <header className={styles.header}>
            <div className={styles.headerLogoContainer}>
                <Link to="/home">
                    <Logo variant="big"/>
                </Link>
                <p className={styles.headerCity}>
                    Astana
                </p>
            </div>
            <div className={styles.headerAction}>
                <Link to="/login" className={buttonVariants({ variant: "" })}>
                        Login
                </Link>
            </div>
        </header>
    );
};

export default Header;