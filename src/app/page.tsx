import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import MenuSection from "@/components/MenuSection";
import FranchiseSection from "@/components/FranchiseSection";
import StoreSection from "@/components/StoreSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandStorySection />
      <MenuSection />
      <FranchiseSection />
      <StoreSection />
      <Footer />
    </main>
  );
}
