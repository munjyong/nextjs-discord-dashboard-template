import React from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import UserProfile from 'components/UserProfile';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

const Profile = () => {
    const { data: session } = useSession();
    const { data, error } = useSWR('/api/profile', fetcher);

    if (!session) {
        return <div>Please sign in</div>;
    }

    return (
        <div>
            <Head>
                <title>NextCord - Your profile</title>
            </Head>
            {session.user?.image && (
                <UserProfile avatar={session.user?.image} userData={data} />
            )}
        </div>
    );
};

export default Profile;
