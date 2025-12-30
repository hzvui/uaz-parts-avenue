import { Button } from "./ui/button";
import { ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Серьга рессоры УАЗ удлиненная, лифт 30 мм (+2 с.л.) 'Autogur73'",
    article: "35960074905",
    price: 3100,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Серьга рессоры УАЗ удлиненная, лифт 20 мм (+2 с.л.) 'Autogur73'",
    article: "35960074905",
    price: 3050,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Серьга рессоры УАЗ стандартная вы­сота (+2 с.л.) 'Autogur73'",
    article: "35960070401",
    price: 2950,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Суппорт (торм.перед) УАЗ Хантер, Патриот правый без колодок",
    article: "359800314078",
    price: 4750,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Суппорт (торм.перед) УАЗ Хантер, Патриот левый без колодок",
    article: "359800314073",
    price: 4750,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container">
        {/* Новинки */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Новинки</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-card border border-border rounded p-3 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-muted rounded mb-3 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  Код: {product.article}
                </p>
                <h3 className="text-sm text-foreground mb-2 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-muted-foreground" />
                  ))}
                </div>
                <p className="text-lg font-bold text-foreground">
                  {product.price.toLocaleString()} ₽
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Хиты продаж */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Хиты продаж / Бестселлеры</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: 6, name: "Картридж (стакан) корпуса полуоси УАЗ передний малого открытого типа", article: "20006063425", price: 7500, rating: 5, reviews: 3 },
              { id: 7, name: "Пыльник поворотного кулака новейшего об­разца УАЗ-3 мосты", article: "20004097809", price: 2370, rating: 4, reviews: 1 },
              { id: 8, name: "Блокировка принудительная с тросовым при­водом ВАЗ 2121 Нива", article: "20060087875", price: 39000, rating: 0, reviews: 0 },
              { id: 9, name: "Шкворень УАЗ 469-452 Буханка старого образца на вкладышероликонной", article: "20060041197", price: 6300, rating: 4.5, reviews: 3 },
              { id: 10, name: "Маятнник на ВАЗ 2121 Нива (НПП+ПК) серия 'Полигон'", article: "20060610077", price: 21500, rating: 5, reviews: 2 },
            ].map((product) => (
              <div 
                key={product.id} 
                className="bg-card border border-border rounded p-3 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-muted rounded mb-3 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  Код: {product.article}
                </p>
                <h3 className="text-sm text-foreground mb-2 line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  {product.reviews > 0 && (
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  )}
                </div>
                <p className="text-lg font-bold text-foreground">
                  {product.price.toLocaleString()} ₽
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
