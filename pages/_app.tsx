import Layout from 'components/Layout';
import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...pageProps}
        />
    </Layout>
);

export default MyApp;
