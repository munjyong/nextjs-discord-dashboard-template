import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home = () => (
    <div className={styles.container}>
        <Head>
            <title>NextCord - Home</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <span className={styles.next}>Next</span>
                <span className={styles.cord}>Cord</span> !
            </h1>

            <p className={styles.description}>
                A simple Discord dashboard.
                <p className={styles.description}>Built with NextJS.</p>
            </p>
        </main>
    </div>
);

export default Home;
