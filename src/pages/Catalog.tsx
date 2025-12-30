import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Поршневая группа ЗМЗ-409", article: "40904.1004018", price: 12500, oldPrice: 14000, rating: 4.8, reviews: 24, image: "/placeholder.svg", badge: "Хит" as const },
  { id: 2, name: "Комплект сцепления УАЗ Hunter", article: "3160-1601130", price: 8900, rating: 4.9, reviews: 56, image: "/placeholder.svg" },
  { id: 3, name: "Рессора передняя УАЗ 469", article: "469-2902012", price: 4500, oldPrice: 5200, rating: 4.7, reviews: 18, image: "/placeholder.svg", badge: "Скидка" as const },
  { id: 4, name: "Стартер УАЗ Patriot", article: "406.3708000", price: 7800, rating: 4.6, reviews: 31, image: "/placeholder.svg" },
  { id: 5, name: "Амортизатор задний Hunter", article: "3159-2915006", price: 2100, rating: 4.8, reviews: 42, image: "/placeholder.svg" },
  { id: 6, name: "Радиатор охлаждения ЗМЗ-409", article: "3160-1301010", price: 9200, rating: 4.5, reviews: 15, image: "/placeholder.svg" },
  { id: 7, name: "Карданный вал передний", article: "31512-2203010", price: 11500, rating: 4.9, reviews: 28, image: "/placeholder.svg" },
  { id: 8, name: "Тормозные колодки УАЗ", article: "3160-3501090", price: 1800, rating: 4.7, reviews: 67, image: "/placeholder.svg" },
];

const Catalog = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-secondary">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Каталог</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Каталог запчастей УАЗ</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
