import Link from 'next/link';
import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
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
            </Menu>
        </Container>
    );
};

export default Header;
