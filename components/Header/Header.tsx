import Link from 'next/link';
import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import styles from 'styles/Header.module.css';

const Header = () => {
    console.log('header');

    return (
        <Container>
            <Menu stackable className={styles.menu}>
                <Menu.Item>
                    <img src='/discord.svg' />
                </Menu.Item>
                <Menu.Item className={styles.menuItem}>
                    <Link href='/'>Home</Link>
                </Menu.Item>
                <Menu.Item className={styles.menuItem}>
                    <Link href='/servers'>Servers</Link>
                </Menu.Item>
                <Menu.Item className={styles.menuItem}>
                    <Link href='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item className={styles.menuItem}>
                    <Link
                        href='https://discord.com/api/oauth2/authorize?client_id=953421404357939254&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify'
                        passHref
                    >
                        <Button className={styles.loginButton}>
                            Login with Discord
                        </Button>
                    </Link>
                </Menu.Item>
            </Menu>
        </Container>
    );
};

export default Header;
