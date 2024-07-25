import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import MailingListSignup from "@/src/components/MailingListSignup";
import MainBanner from "@/src/components/MainBanner";
import ProductDetails from "@/src/components/ProductDetails";
import ProductFilters from "@/src/components/ProductFilters";
import RelatedProducts from "@/src/components/RelatedProducts";
import SideBanner from "@/src/components/SideBanner";
import Head from "next/head";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Apparel Company</title>
        <meta name="description" content="Apparel Company website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MainBanner />

      <main className="flex-1 p-8 flex space-x-4">
        <aside className="w-1/4 space-y-4">
          <ProductFilters />
          <SideBanner />
          <MailingListSignup />
        </aside>
        <section className="w-3/4 space-y-4">
          <ProductDetails />
          <RelatedProducts />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
