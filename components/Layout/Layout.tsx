import React, { ReactChild } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

interface Props {
    children: ReactChild;
}

const Layout = ({ children }: Props) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
