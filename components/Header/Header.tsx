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
                <Menu.Item className={styles.menuItem}>Home</Menu.Item>
                <Menu.Item className={styles.menuItem}>Servers</Menu.Item>
                <Menu.Item className={styles.menuItem}>Profile</Menu.Item>
            </Menu>
        </Container>
    );
};

export default Header;
