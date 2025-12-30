import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";
import uaz469 from "@/assets/uaz-469.jpg";
import uaz452 from "@/assets/uaz-452.jpg";
import uazHunter from "@/assets/uaz-hunter.jpg";
import uazPatriot from "@/assets/uaz-patriot.jpg";

const models = [
  { name: "УАЗ 469", image: uaz469 },
  { name: "УАЗ 452 «Буханка»", image: uaz452 },
  { name: "УАЗ Hunter", image: uazHunter },
  { name: "УАЗ Patriot", image: uazPatriot },
];

const VehicleModels = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            ЗАПЧАСТИ ДЛЯ ВСЕХ МОДЕЛЕЙ УАЗ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Подберём запчасти для любой модели УАЗ: от классического 469 до современного Patriot
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((model, index) => (
            <a 
              key={model.name}
              href="#"
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-secondary transition-colors">
                  {model.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Перейти к запчастям →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                Не можете найти нужную запчасть?
              </h3>
              <p className="text-muted-foreground">
                Позвоните нам или напишите в WhatsApp — поможем подобрать!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+79372700026">
                  <Phone className="h-5 w-5" />
                  +7 937 270 00 26
                </a>
              </Button>
              <Button variant="default" size="lg" asChild>
                <a href="https://wa.me/79372700026" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
