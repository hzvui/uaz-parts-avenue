import { Percent, Gift, CreditCard, Tag } from "lucide-react";
import { Button } from "./ui/button";

const promos = [
  {
    icon: null,
    title: "Скидка 2% для зарегистрированных пользователей",
    image: "percent",
  },
  {
    icon: null,
    title: "Скидка на ШРУСы Autogur73",
    image: "shrus",
  },
  {
    icon: null,
    title: "Бонусные баллы при оплате картой",
    image: "bonus",
  },
  {
    icon: null,
    title: "За рулём скидок",
    image: "wheel",
  },
];

const Features = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {promos.map((promo, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                {promo.image === "percent" && (
                  <div className="text-4xl font-bold text-primary">2%</div>
                )}
                {promo.image === "shrus" && (
                  <Percent className="h-12 w-12 text-muted-foreground" />
                )}
                {promo.image === "bonus" && (
                  <Gift className="h-12 w-12 text-primary" />
                )}
                {promo.image === "wheel" && (
                  <Tag className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <p className="text-sm text-foreground">
                {promo.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-4">
          <Button variant="default" size="sm">
            Все промо-акции
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
