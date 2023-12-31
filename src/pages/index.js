import Head from 'next/head';
import { Inter } from 'next/font/google';

import Recommandation from '../Components/HomePage/Recommandation';
import Banner from '../Components/HomePage/Banner';
import BannerTwo from '../Components/HomePage/BannerTwo';
import BannerThree from '../Components/HomePage/BannerThree';
import Footer from '../Components/HomePage/Footer';
import Verified from '../Components/HomePage/Verified';
import Media from '../Components/HomePage/Media';
import References from '../Components/HomePage/References';
import Layout from '../Components/Layout';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>BanaBiDers iyi gelecek</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="story ozelorta one-section-home ">
          <Banner />
        </section>

        <section className="points ozelorta">
          <Verified />
        </section>
        <section className="story ozelorta">
          <BannerTwo />
        </section>

        <section className="tabs home-target scroll-mt-28" id="references">
          <References />
        </section>

        <section className="tabs scroll-mt-28">
          <Recommandation />
          <Media />
        </section>

        <section className="story ozelorta">
          <BannerThree />
        </section>

        <Footer />
      </Layout>
    </>
  );
}
