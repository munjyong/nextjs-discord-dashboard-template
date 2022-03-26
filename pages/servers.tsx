import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

const Servers = () => {
    const { data: session } = useSession();

    if (!session) {
        return <div>Please sign in</div>;
    }

    return (
        <div>
            <Head>
                <title>NextCord - Your servers</title>
            </Head>
            Servers page
        </div>
    );
};

export default Servers;
