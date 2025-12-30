import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Shield, Truck, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-uaz.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-6">
        <div className="relative rounded-xl overflow-hidden">
          <img 
            src={heroImage} 
            alt="УАЗ автомобиль" 
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-6 md:p-12 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4 border border-primary/30">
                <Shield className="h-4 w-4" />
                Оригинальные запчасти
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                ЗАПЧАСТИ <span className="text-secondary">УАЗ</span><br />
                ОТ А ДО Я
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                Более 15 000 наименований для УАЗ 469, 452, Hunter, Patriot. 
                Быстрая доставка по всей России.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/catalog">
                    Перейти в каталог
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contacts">
                    Связаться с нами
                  </Link>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <Truck className="h-6 w-6 text-secondary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Доставка<br />по России</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 text-secondary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Гарантия<br />качества</p>
                </div>
                <div className="text-center">
                  <Headphones className="h-6 w-6 text-secondary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Поддержка<br />24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
