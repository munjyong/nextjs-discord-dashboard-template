import { getToken } from 'next-auth/jwt';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import styles from 'styles/Header.module.css';

const Header = () => {
    const { data: session } = useSession();

    return (
        <Container>
            <Menu stackable className={styles.menu}>
                <div className={styles.leftMenu}>
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
                </div>
                <div className={styles.rightMenu}>
                    <Menu.Item className={styles.menuItem}>
                        {session && (
                            <>
                                <Menu.Item className={styles.menuItem}>
                                    <Image
                                        src={session.user?.image || ''}
                                        className={styles.avatar}
                                        alt='User avatar'
                                        width={28}
                                        height={28}
                                    />
                                    <span className={styles.username}>
                                        {session.user?.name}
                                    </span>
                                </Menu.Item>
                                <Link href='/api/auth/signin'>
                                    <Button
                                        className={styles.loginButton}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            signOut();
                                        }}
                                    >
                                        Sign out
                                    </Button>
                                </Link>
                            </>
                        )}
                        {!session && (
                            <Link href='/api/auth/signin'>
                                <Button
                                    className={styles.loginButton}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signIn('discord', {
                                            callbackUrl:
                                                'http://localhost:3000/',
                                        });
                                    }}
                                >
                                    Login with Discord
                                </Button>
                            </Link>
                        )}
                    </Menu.Item>
                </div>
            </Menu>
        </Container>
    );
};

export default Header;
