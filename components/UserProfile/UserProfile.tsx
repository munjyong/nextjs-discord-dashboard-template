import Image from 'next/image';
import React from 'react';
import { Card } from 'semantic-ui-react';
import styles from 'styles/UserProfile.module.css';

const UserProfile = () => (
    <main className={styles.main}>
        <h1>My profile:</h1>
        <Image
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            alt='Profile image'
            width='100%'
            height='100%'
            className={styles.avatar}
        />
        <Card className={styles.card}>
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
    </main>
);

export default UserProfile;
