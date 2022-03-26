import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

const Profile = () => {
    const { data: session } = useSession();

    if (!session) {
        return <div>Please sign in</div>;
    }

    return (
        <div>
            <Head>
                <title>NextCord - Your profile</title>
            </Head>
            Profile page
        </div>
    );
};

export default Profile;
