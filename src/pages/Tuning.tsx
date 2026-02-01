import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Wrench, Shield, Zap, Car } from "lucide-react";
import { useState } from "react";

const tuningCategories = [
  { id: "all", name: "Все товары" },
  { id: "suspension", name: "Подвеска" },
  { id: "exterior", name: "Экстерьер" },
  { id: "interior", name: "Интерьер" },
  { id: "engine", name: "Двигатель" },
  { id: "wheels", name: "Колёса и диски" },
  { id: "lighting", name: "Освещение" },
];

const tuningProducts = [
  {
    id: 101,
    name: "Лифт-комплект УАЗ Патриот 50мм",
    category: "suspension",
    vehicle: "УАЗ",
    article: "ТЮН-001",
    price: 28500,
    oldPrice: 32000,
    rating: 4.9,
    reviews: 45,
    image: "/placeholder.svg",
    badge: "Хит" as const,
    description: "Полный комплект для лифта подвески на 50мм. Включает проставки, удлинители амортизаторов.",
    inStock: true,
  },
  {
    id: 102,
    name: "Силовой бампер передний УАЗ 469",
    category: "exterior",
    vehicle: "УАЗ",
    article: "ТЮН-002",
    price: 45000,
    rating: 4.8,
    reviews: 32,
    image: "/placeholder.svg",
    description: "Усиленный силовой бампер с площадкой под лебёдку. Сталь 4мм, порошковая покраска.",
    inStock: true,
  },
  {
    id: 103,
    name: "Шноркель УАЗ Hunter",
    category: "exterior",
    vehicle: "УАЗ",
    article: "ТЮН-003",
    price: 12800,
    oldPrice: 14500,
    rating: 4.7,
    reviews: 28,
    image: "/placeholder.svg",
    badge: "Скидка" as const,
    description: "Воздухозаборник для преодоления бродов. Полиэтилен высокой плотности.",
    inStock: true,
  },
  {
    id: 104,
    name: "Экспедиционный багажник ГАЗ Соболь",
    category: "exterior",
    vehicle: "ГАЗ",
    article: "ТЮН-004",
    price: 35000,
    rating: 4.9,
    reviews: 19,
    image: "/placeholder.svg",
    description: "Алюминиевый багажник с креплениями для hi-jack и канистр. Нагрузка до 150кг.",
    inStock: true,
  },
  {
    id: 105,
    name: "Комплект сидений Recaro УАЗ",
    category: "interior",
    vehicle: "УАЗ",
    article: "ТЮН-005",
    price: 89000,
    rating: 5.0,
    reviews: 12,
    image: "/placeholder.svg",
    badge: "Премиум" as const,
    description: "Спортивные сиденья с боковой поддержкой. Алькантара + экокожа.",
    inStock: false,
  },
  {
    id: 106,
    name: "Турбокит ЗМЗ-409 УАЗ Патриот",
    category: "engine",
    vehicle: "УАЗ",
    article: "ТЮН-006",
    price: 185000,
    rating: 4.8,
    reviews: 8,
    image: "/placeholder.svg",
    description: "Полный комплект турбонаддува. Увеличение мощности до 200 л.с.",
    inStock: true,
  },
  {
    id: 107,
    name: "Кованые диски R16 Off-Road",
    category: "wheels",
    vehicle: "УАЗ",
    article: "ТЮН-007",
    price: 52000,
    oldPrice: 58000,
    rating: 4.9,
    reviews: 67,
    image: "/placeholder.svg",
    badge: "Скидка" as const,
    description: "Комплект 4 шт. Кованый алюминий, усиленная конструкция для бездорожья.",
    inStock: true,
  },
  {
    id: 108,
    name: "LED-балка 120W ГАЗель",
    category: "lighting",
    vehicle: "ГАЗ",
    article: "ТЮН-008",
    price: 8900,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg",
    description: "Светодиодная балка дальнего света. 40 LED, световой поток 10800 лм.",
    inStock: true,
  },
  {
    id: 109,
    name: "Лебёдка 12000 lbs УАЗ",
    category: "exterior",
    vehicle: "УАЗ",
    article: "ТЮН-009",
    price: 67000,
    rating: 4.9,
    reviews: 34,
    image: "/placeholder.svg",
    badge: "Хит" as const,
    description: "Электрическая лебёдка с синтетическим тросом. Тяговое усилие 5443 кг.",
    inStock: true,
  },
  {
    id: 110,
    name: "Пороги силовые ГАЗ-66",
    category: "exterior",
    vehicle: "ГАЗ",
    article: "ТЮН-010",
    price: 28000,
    rating: 4.7,
    reviews: 15,
    image: "/placeholder.svg",
    description: "Усиленные пороги со ступенькой. Сталь 3мм, антикоррозийное покрытие.",
    inStock: true,
  },
  {
    id: 111,
    name: "Спортивный руль УАЗ",
    category: "interior",
    vehicle: "УАЗ",
    article: "ТЮН-011",
    price: 7500,
    rating: 4.5,
    reviews: 41,
    image: "/placeholder.svg",
    description: "Рулевое колесо диаметром 350мм с перфорированной кожей.",
    inStock: true,
  },
  {
    id: 112,
    name: "Прямоток выхлопной системы ЗМЗ",
    category: "engine",
    vehicle: "УАЗ",
    article: "ТЮН-012",
    price: 15800,
    oldPrice: 18000,
    rating: 4.6,
    reviews: 23,
    image: "/placeholder.svg",
    badge: "Скидка" as const,
    description: "Спортивная выхлопная система. Нержавеющая сталь, агрессивный звук.",
    inStock: true,
  },
];

const features = [
  {
    icon: Wrench,
    title: "Профессиональный монтаж",
    description: "Установка всех комплектующих нашими специалистами",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "12 месяцев гарантии на все товары и работы",
  },
  {
    icon: Zap,
    title: "Быстрая доставка",
    description: "Отправка в день заказа по всей России",
  },
  {
    icon: Car,
    title: "Подбор по авто",
    description: "Поможем выбрать тюнинг под вашу модель",
  },
];

const Tuning = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [vehicleFilter, setVehicleFilter] = useState<"all" | "УАЗ" | "ГАЗ">("all");

  const filteredProducts = tuningProducts.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const vehicleMatch = vehicleFilter === "all" || product.vehicle === vehicleFilter;
    return categoryMatch && vehicleMatch;
  });

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Хит":
        return "default";
      case "Скидка":
        return "destructive";
      case "Премиум":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-secondary">Главная</Link>
            <span>/</span>
            <span className="text-primary-foreground">Тюнинг ГАЗ и УАЗ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Тюнинг ГАЗ и УАЗ
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Профессиональный тюнинг для вашего внедорожника. Силовые бамперы, лифт-комплекты, 
            экспедиционное оборудование и многое другое.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <feature.icon className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card border border-border rounded-lg p-4 sticky top-24">
              <h3 className="font-bold text-foreground mb-4">Фильтры</h3>
              
              {/* Vehicle Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Марка автомобиля</h4>
                <div className="space-y-2">
                  {(["all", "УАЗ", "ГАЗ"] as const).map((vehicle) => (
                    <button
                      key={vehicle}
                      onClick={() => setVehicleFilter(vehicle)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        vehicleFilter === vehicle
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {vehicle === "all" ? "Все марки" : vehicle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Категория</h4>
                <div className="space-y-2">
                  {tuningCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="text-foreground font-semibold">{filteredProducts.length}</span>
              </p>
              <Tabs defaultValue="grid" className="hidden sm:block">
                <TabsList className="bg-muted">
                  <TabsTrigger value="grid">Сетка</TabsTrigger>
                  <TabsTrigger value="list">Список</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-card border border-border rounded-lg">
                <p className="text-muted-foreground">Товары не найдены</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("all");
                    setVehicleFilter("all");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge
                          variant={getBadgeVariant(product.badge)}
                          className="absolute top-2 left-2"
                        >
                          {product.badge}
                        </Badge>
                      )}
                      <Badge variant="outline" className="absolute top-2 right-2 bg-card/80">
                        {product.vehicle}
                      </Badge>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                          <span className="text-muted-foreground font-semibold">Под заказ</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">Арт: {product.article}</p>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold text-foreground hover:text-secondary transition-colors line-clamp-2 min-h-[2.5rem]">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-3">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="text-sm font-medium text-foreground">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price & Button */}
                      <div className="flex items-end justify-between mt-4">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-secondary">
                              {product.price.toLocaleString()} ₽
                            </span>
                          </div>
                          {product.oldPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.oldPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                        <Button size="sm" className="gap-1">
                          <ShoppingCart className="h-4 w-4" />
                          <span className="hidden sm:inline">В корзину</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Нужна консультация по тюнингу?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Наши специалисты помогут подобрать оптимальный комплект тюнинга для вашего автомобиля
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+79372700026">Позвонить: +7 937 270 00 26</a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tuning;
