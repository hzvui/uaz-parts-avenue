import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Поршневая группа ЗМЗ-409", article: "40904.1004018", price: 12500, oldPrice: 14000, rating: 4.8, reviews: 24, image: "/placeholder.svg", badge: "Хит" },
  { id: 2, name: "Комплект сцепления УАЗ Hunter", article: "3160-1601130", price: 8900, rating: 4.9, reviews: 56, image: "/placeholder.svg" },
  { id: 3, name: "Рессора передняя УАЗ 469", article: "469-2902012", price: 4500, oldPrice: 5200, rating: 4.7, reviews: 18, image: "/placeholder.svg", badge: "Скидка" },
  { id: 4, name: "Стартер УАЗ Patriot", article: "406.3708000", price: 7800, rating: 4.6, reviews: 31, image: "/placeholder.svg", badge: "Новинка" },
  { id: 5, name: "Амортизатор задний Hunter", article: "3159-2915006", price: 2100, oldPrice: 2500, rating: 4.8, reviews: 42, image: "/placeholder.svg" },
];

const bestsellers = [
  { id: 6, name: "Радиатор охлаждения ЗМЗ-409", article: "3160-1301010", price: 9200, rating: 4.5, reviews: 15, image: "/placeholder.svg" },
  { id: 7, name: "Карданный вал передний", article: "31512-2203010", price: 11500, oldPrice: 13000, rating: 4.9, reviews: 28, image: "/placeholder.svg", badge: "Хит" },
  { id: 8, name: "Тормозные колодки УАЗ", article: "3160-3501090", price: 1800, rating: 4.7, reviews: 67, image: "/placeholder.svg" },
  { id: 9, name: "Шкворень УАЗ 469", article: "469-2304019", price: 3200, rating: 4.6, reviews: 45, image: "/placeholder.svg" },
  { id: 10, name: "Генератор 90А УАЗ", article: "4002.3771", price: 8500, rating: 4.8, reviews: 33, image: "/placeholder.svg" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        {/* Новинки */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Новинки</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="ml-2" asChild>
                <Link to="/catalog?sort=new">Все новинки</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Хиты продаж */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Хиты продаж</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="ml-2" asChild>
                <Link to="/catalog?sort=popular">Все хиты</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
