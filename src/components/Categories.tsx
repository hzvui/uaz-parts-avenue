import { Settings, Cog, Car, Zap, Wrench, Radio } from "lucide-react";

const categories = [
  {
    icon: Settings,
    title: "Двигатель",
    description: "ЗМЗ-406, 409, УМЗ",
    count: "2500+ товаров",
    href: "#engine",
  },
  {
    icon: Cog,
    title: "Трансмиссия",
    description: "КПП, сцепление, раздатка",
    count: "1800+ товаров",
    href: "#transmission",
  },
  {
    icon: Car,
    title: "Ходовая часть",
    description: "Подвеска, мосты, рессоры",
    count: "2200+ товаров",
    href: "#suspension",
  },
  {
    icon: Wrench,
    title: "Тормозная система",
    description: "Колодки, диски, цилиндры",
    count: "950+ товаров",
    href: "#brakes",
  },
  {
    icon: Radio,
    title: "Электрика",
    description: "Проводка, датчики, свет",
    count: "1600+ товаров",
    href: "#electric",
  },
  {
    icon: Zap,
    title: "Кузов и салон",
    description: "Панели, сиденья, стёкла",
    count: "1400+ товаров",
    href: "#body",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-background" id="catalog">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            КАТАЛОГ ЗАПЧАСТЕЙ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите категорию или воспользуйтесь поиском для быстрого подбора нужных запчастей
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              className="group card-gradient border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-uaz-green-light transition-colors">
                  <category.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <span className="text-xs text-secondary font-medium">
                    {category.count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
