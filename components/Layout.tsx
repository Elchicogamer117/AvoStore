import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import styles from './layout.module.css'

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return(
        <div className={styles.container} >
            <Navbar />
            {children}
            <footer>soy el pie de pagina</footer>
        </div>
    );
}

export default Layout;