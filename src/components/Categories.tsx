import { Link } from "react-router-dom";
import { Settings, Cog, Car, Zap, Wrench, Radio, CircleDot, Gauge } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { icon: Settings, title: "Двигатель", slug: "engine", count: "2500+" },
  { icon: Cog, title: "Трансмиссия", slug: "transmission", count: "1800+" },
  { icon: Car, title: "Ходовая часть", slug: "suspension", count: "2200+" },
  { icon: Wrench, title: "Тормоза", slug: "brakes", count: "950+" },
  { icon: Radio, title: "Электрика", slug: "electric", count: "1600+" },
  { icon: Zap, title: "Кузов и салон", slug: "body", count: "1400+" },
  { icon: Gauge, title: "Рулевое", slug: "steering", count: "800+" },
  { icon: CircleDot, title: "Внедорожка", slug: "offroad", count: "600+" },
];

const Categories = () => {
  return (
    <section className="py-10 bg-background" id="catalog">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Каталог запчастей
          </h2>
          <Button variant="outline" size="sm" asChild>
            <Link to="/catalog">Все категории</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border hover:border-primary hover:bg-muted transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center mb-3 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <category.icon className="h-7 w-7 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                {category.title}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {category.count} товаров
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
