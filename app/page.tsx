import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Heritage from "@/components/Heritage";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Heritage />
      <Testimonials />
      <Journal />
      <Services />
      <Newsletter />
      <Footer />
    </main>
  );
}
