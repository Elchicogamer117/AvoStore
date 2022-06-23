import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return(
        <div>
            <Navbar />
            {children}
            <footer>soy el pie de pagina</footer>
        </div>
    );
}

export default Layout;