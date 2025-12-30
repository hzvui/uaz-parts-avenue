import { Button } from "./ui/button";
import { ArrowRight, Shield, Truck, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-uaz.jpg";

const Hero = () => {
  return (
    <section className="relative hero-gradient py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Оригинальные запчасти УАЗ
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              ЗАПЧАСТИ <span className="text-gradient">УАЗ</span><br />
              ОТ А ДО Я
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Более 15 000 наименований запчастей для УАЗ 469, 452 "Буханка", Hunter, Patriot. 
              Быстрая доставка по всей России.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Перейти в каталог
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Подобрать запчасть
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <Truck className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Доставка<br />по России</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Гарантия<br />качества</p>
              </div>
              <div className="text-center">
                <Headphones className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Поддержка<br />24/7</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl glow-green">
              <img 
                src={heroImage} 
                alt="УАЗ автомобиль" 
                className="w-full h-[500px] object-cover"
                id="hero-image"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
