import React, { ReactChild } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';

interface Props {
    children: ReactChild;
}

const Layout = ({ children }: Props) => (
    <>
        <Head>
            <title>NextCord</title>
            <meta name='description' content='Made with NextJS' />
            <link rel='icon' href='/discord.svg' />
        </Head>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
