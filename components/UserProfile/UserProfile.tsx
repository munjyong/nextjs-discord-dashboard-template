import Image from 'next/image';
import React from 'react';
import { Card } from 'semantic-ui-react';
import styles from 'styles/UserProfile.module.css';

interface Props {
    avatar: string;
    userData: object;
}

const UserProfile = ({ avatar, userData }: Props) => (
    <main className={styles.main}>
        <h1>About me:</h1>
        <Image
            src={avatar}
            alt='Profile image'
            width='100%'
            height='100%'
            className={styles.avatar}
        />
        <div>
            <Card className={styles.card}>
                <Card.Content>
                    <Card.Description>
                        <pre className={styles.data}>
                            {JSON.stringify(userData, null, 2)}
                        </pre>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    </main>
);

export default UserProfile;
