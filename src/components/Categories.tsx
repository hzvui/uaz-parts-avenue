import { Settings, Cog, Car, Zap, Wrench, Radio, Gauge, CircleDot } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { icon: Gauge, title: "Рулевое управление", href: "#" },
  { icon: CircleDot, title: "Дисковые тормоза", href: "#" },
  { icon: Settings, title: "Муфты колёсные (хабы)", href: "#" },
  { icon: Cog, title: "Пыльники поворотного кулака", href: "#" },
  { icon: Car, title: "ШРУСа, Полуоси, Валы", href: "#" },
  { icon: Wrench, title: "Шкворневая поникающая", href: "#" },
  { icon: Radio, title: "Шестерни тормозной системы", href: "#" },
  { icon: Zap, title: "Торсионная комплектующая", href: "#" },
  { icon: Settings, title: "Расширители колёс, арок", href: "#" },
  { icon: Cog, title: "Подвеска, лифт подвески", href: "#" },
  { icon: Car, title: "Раздаточные коробки", href: "#" },
  { icon: Wrench, title: "Лифт кузова (боди лифт)", href: "#" },
  { icon: Radio, title: "Дифференциалы (блокировки)", href: "#" },
  { icon: Zap, title: "Главные пары", href: "#" },
  { icon: Gauge, title: "Стёкла, окна, люки", href: "#" },
  { icon: CircleDot, title: "Система отопления и охлаждения", href: "#" },
];

const Categories = () => {
  return (
    <section className="py-8 bg-background" id="catalog">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Интернет-магазин Магазин469-452.ru
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group flex flex-col items-center text-center hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted border border-border flex items-center justify-center mb-2 group-hover:border-primary transition-colors overflow-hidden">
                <category.icon className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs text-foreground leading-tight">
                {category.title}
              </span>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="default" size="lg">
            Показать все
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
