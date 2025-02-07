import TopHeader from "@/components/Header";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Hero, { ExploreProducts, Hero1, ProductsPage } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <main>
        <Hero />
        <Hero1 />
        <ProductsPage />
        <ExploreProducts />
      </main>
      <Footer />
    </>
  );
}
