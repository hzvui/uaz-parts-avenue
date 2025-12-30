import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import VehicleModels from "@/components/VehicleModels";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Features />
        <VehicleModels />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
