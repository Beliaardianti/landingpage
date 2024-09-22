import Head from 'next/head';
import { useEffect } from 'react'; // Tambahkan ini
import "@/styles/globals.css";
// import "@/styles/slick.css"
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
