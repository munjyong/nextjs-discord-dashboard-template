import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { ReactChild } from 'react';

interface Props {
    children: ReactChild;
}

const Layout = ({ children }: Props) => {
    console.log('Layout');

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
