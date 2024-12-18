import React from 'react';
import styles from './Logo.module.css'
import {LogoProps} from "@/types/components/logo.ts";


const Logo = ({ variant }: LogoProps):JSX.Element => {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={styles.varint}>

                <g id="atlassian">

                    <g id="atlassian_2">

                        <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M11.1186 14.084C10.9735 13.8941 10.7399 13.7939 10.5025 13.8197C10.265 13.8455 10.0584 13.9936 9.95749 14.2103L4.07422 25.9814C3.96525 26.1995 3.9769 26.4586 4.10501 26.666C4.23312 26.8735 4.45943 26.9997 4.70312 26.9998H12.8953C13.1633 27.006 13.4099 26.8535 13.5242 26.6108C15.2913 22.9566 14.2203 17.4004 11.1186 14.084Z" fill="#000000"/>

                        <path id="vector_2" fillRule="evenodd" clipRule="evenodd" d="M15.4336 3.37762C12.4513 7.96969 12.1071 13.7944 14.5278 18.7062L18.4773 26.6108C18.5964 26.8492 18.8399 26.9998 19.1062 26.9998H27.2969C27.5406 26.9998 27.7669 26.8735 27.895 26.6661C28.0231 26.4586 28.0347 26.1996 27.9258 25.9815C27.9258 25.9815 16.9065 3.92489 16.6296 3.3732C16.5179 3.14406 16.285 2.99906 16.0302 3C15.7754 3.00095 15.5437 3.14765 15.4336 3.37762Z" fill="#000000"/>

                    </g>

                </g>

                <defs>

                    <linearGradient id="paint0_linear_1_13560" x1="14.3428" y1="15.9006" x2="6.09079" y2="24.7588" gradientUnits="userSpaceOnUse">

                        <stop stopColor="#0052CC"/>

                        <stop offset="0.923" stopColor="#2684FF"/>

                    </linearGradient>

                </defs>

            </svg>
    );
};

export default Logo;