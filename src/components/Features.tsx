import { Truck, Shield, RotateCcw, Clock, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Отправка в день оплаты. Доставка по всей России.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Оригинальные запчасти и проверенные аналоги.",
  },
  {
    icon: RotateCcw,
    title: "Возврат 14 дней",
    description: "Вернём деньги или обменяем в течение 14 дней.",
  },
  {
    icon: Clock,
    title: "15+ лет опыта",
    description: "Работаем с запчастями УАЗ более 15 лет.",
  },
  {
    icon: CreditCard,
    title: "Удобная оплата",
    description: "Карты, наличные, безналичный расчёт. С НДС и без.",
  },
  {
    icon: Headphones,
    title: "Консультация",
    description: "Поможем подобрать запчасть по телефону и WhatsApp.",
  },
];

const Features = () => {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
          Почему выбирают <span className="text-secondary">нас</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="text-center p-4 rounded-lg bg-muted/50 border border-border hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
