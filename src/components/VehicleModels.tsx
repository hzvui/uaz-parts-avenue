import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";
import uaz469 from "@/assets/uaz-469.jpg";
import uaz452 from "@/assets/uaz-452.jpg";
import uazHunter from "@/assets/uaz-hunter.jpg";
import uazPatriot from "@/assets/uaz-patriot.jpg";

const models = [
  { name: "УАЗ 469", image: uaz469, slug: "uaz-469" },
  { name: "УАЗ 452 «Буханка»", image: uaz452, slug: "uaz-452" },
  { name: "УАЗ Hunter", image: uazHunter, slug: "uaz-hunter" },
  { name: "УАЗ Patriot", image: uazPatriot, slug: "uaz-patriot" },
];

const VehicleModels = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
          Запчасти для всех моделей <span className="text-secondary">УАЗ</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {models.map((model) => (
            <Link 
              key={model.name}
              to={`/catalog?model=${model.slug}`}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300"
            >
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-foreground text-lg group-hover:text-secondary transition-colors">
                  {model.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Перейти к запчастям →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-card border border-border rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Не можете найти нужную запчасть?
              </h3>
              <p className="text-muted-foreground">
                Позвоните или напишите в WhatsApp — поможем подобрать!
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+79372700026">
                  <Phone className="h-5 w-5" />
                  +7 937 270 00 26
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
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
