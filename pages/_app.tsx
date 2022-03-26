import Layout from 'components/Layout';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Layout>
            <Component
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...pageProps}
            />
        </Layout>
    </SessionProvider>
);

export default MyApp;
