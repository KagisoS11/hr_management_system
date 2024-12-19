import '../styles/globals.css';
import Layout from 'src/pages/components/layout_comp';

export default function App({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
