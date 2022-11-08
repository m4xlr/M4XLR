import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Script id='g-analytics-script' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script id='seekforinfo' strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
</Script>

  <Component {...pageProps} />
  </>
  );
}
export default MyApp
