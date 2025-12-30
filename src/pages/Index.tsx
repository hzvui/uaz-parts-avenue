import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import VehicleModels from "@/components/VehicleModels";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <VehicleModels />
    </Layout>
  );
};

export default Index;
