import Image from 'next/image';
import React from 'react';
import { Header } from 'semantic-ui-react';
import styles from 'styles/Footer.module.css';

const Footer = () => (
    <div className={styles.container}>
        <Image src='/github.svg' width={25} height={25} alt='' />
        &nbsp; Source code&nbsp;
        <a
            href='https://github.com/munjyong/nextjs-discord-dashboard'
            target='_blank'
            rel='noreferrer'
            className={styles.link}
        >
            here
        </a>
    </div>
);

export default Footer;
