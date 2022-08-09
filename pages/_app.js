import App from 'next/app';
import '../styles/globals.css'
import '../lib/useScrollRestoration'
import { useScrollRestoration } from '../lib/useScrollRestoration'
import { wrapper } from '../store'

const MyApp = ({ Component, pageProps, router }) => {
  useScrollRestoration(router)
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (context) => {
  const appInitialProps = await App.getInitialProps(context);
  return { ...appInitialProps };
};

export default wrapper.withRedux(MyApp)
