import { Truck, Shield, RotateCcw, Clock, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Отправляем заказы в день оплаты. Доставка по всей России транспортными компаниями.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Только оригинальные запчасти и проверенные аналоги. Гарантия на весь товар.",
  },
  {
    icon: RotateCcw,
    title: "Возврат 14 дней",
    description: "Не подошла деталь? Вернём деньги или обменяем в течение 14 дней.",
  },
  {
    icon: Clock,
    title: "15+ лет опыта",
    description: "Работаем с запчастями УАЗ более 15 лет. Знаем каждую деталь.",
  },
  {
    icon: CreditCard,
    title: "Удобная оплата",
    description: "Принимаем карты, наличные, безналичный расчёт. Работаем с НДС и без.",
  },
  {
    icon: Headphones,
    title: "Консультация",
    description: "Поможем подобрать нужную запчасть. Консультируем по телефону и в WhatsApp.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Camo Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Магазин469-452.ru — ваш надёжный поставщик запчастей УАЗ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-background/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 hover:bg-background/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
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
