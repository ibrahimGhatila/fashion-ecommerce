import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import LatestCollections from "@/components/LatestCollections";
import SupportedBy from "@/components/SupportedBy";
import Testimonials from "@/components/Testimonials";
import OutfitInspiration from "@/components/OutfitInspiration";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <LatestCollections />
      <SupportedBy />
      <Testimonials />
      <OutfitInspiration />
      <Services />
      <Newsletter />
      <Footer />
    </main>
  );
}
