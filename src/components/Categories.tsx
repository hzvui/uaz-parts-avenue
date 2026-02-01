import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const categories = [
  { title: "Двигатель", slug: "engine" },
  { title: "Трансмиссия", slug: "transmission" },
  { title: "Ходовая часть", slug: "suspension" },
  { title: "Тормозная система", slug: "brakes" },
  { title: "Электрика", slug: "electric" },
  { title: "Кузов и салон", slug: "body" },
  { title: "Рулевое управление", slug: "steering" },
  { title: "Внедорожка", slug: "offroad" },
  { title: "Система охлаждения", slug: "cooling" },
  { title: "Топливная система", slug: "fuel" },
  { title: "Выхлопная система", slug: "exhaust" },
  { title: "Фильтры", slug: "filters" },
  { title: "Тюнинг ГАЗ и УАЗ", slug: "tuning" },
];

const Categories = () => {
  return (
    <section className="py-8 bg-muted/30" id="catalog">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">
            Каталог запчастей
          </h2>
          <Button variant="link" size="sm" asChild className="text-secondary hover:text-secondary/80">
            <Link to="/catalog">Все категории →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={category.slug === "tuning" ? "/tuning" : `/category/${category.slug}`}
              className="text-base font-semibold text-foreground hover:text-secondary transition-colors py-1 text-center"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
