import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Поршневая группа ЗМЗ-409",
    article: "40904.1004018",
    price: 12500,
    oldPrice: 14000,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg",
    badge: "Хит продаж",
  },
  {
    id: 2,
    name: "Комплект сцепления УАЗ Hunter",
    article: "3160-1601130",
    price: 8900,
    oldPrice: null,
    rating: 4.9,
    reviews: 56,
    image: "/placeholder.svg",
    badge: null,
  },
  {
    id: 3,
    name: "Рессора передняя УАЗ 469",
    article: "469-2902012",
    price: 4500,
    oldPrice: 5200,
    rating: 4.7,
    reviews: 18,
    image: "/placeholder.svg",
    badge: "Скидка",
  },
  {
    id: 4,
    name: "Стартер УАЗ Patriot",
    article: "406.3708000",
    price: 7800,
    oldPrice: null,
    rating: 4.6,
    reviews: 31,
    image: "/placeholder.svg",
    badge: "Новинка",
  },
  {
    id: 5,
    name: "Амортизатор задний Hunter",
    article: "3159-2915006",
    price: 2100,
    oldPrice: 2500,
    rating: 4.8,
    reviews: 42,
    image: "/placeholder.svg",
    badge: null,
  },
  {
    id: 6,
    name: "Радиатор охлаждения ЗМЗ-409",
    article: "3160-1301010",
    price: 9200,
    oldPrice: null,
    rating: 4.5,
    reviews: 15,
    image: "/placeholder.svg",
    badge: null,
  },
  {
    id: 7,
    name: "Карданный вал передний",
    article: "31512-2203010",
    price: 11500,
    oldPrice: 13000,
    rating: 4.9,
    reviews: 28,
    image: "/placeholder.svg",
    badge: "Хит продаж",
  },
  {
    id: 8,
    name: "Тормозные колодки УАЗ",
    article: "3160-3501090",
    price: 1800,
    oldPrice: null,
    rating: 4.7,
    reviews: 67,
    image: "/placeholder.svg",
    badge: null,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              ПОПУЛЯРНЫЕ ТОВАРЫ
            </h2>
            <p className="text-muted-foreground">
              Лучшие предложения для вашего УАЗ
            </p>
          </div>
          <Button variant="outline">
            Смотреть все товары
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square bg-muted overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded ${
                    product.badge === "Хит продаж" ? "bg-accent text-accent-foreground" :
                    product.badge === "Скидка" ? "bg-destructive text-destructive-foreground" :
                    "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">
                  Арт: {product.article}
                </p>
                <h3 className="font-heading font-medium text-foreground mb-2 line-clamp-2 min-h-[48px] group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} отзывов)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-heading font-bold text-foreground">
                      {product.price.toLocaleString()} ₽
                    </p>
                    {product.oldPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </p>
                    )}
                  </div>
                  <Button variant="cart" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
