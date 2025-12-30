import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-uaz.jpg";

const Hero = () => {
  return (
    <section className="relative bg-card overflow-hidden">
      <div className="container py-6">
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={heroImage} 
            alt="УАЗ автомобиль" 
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-6 md:p-10 max-w-lg">
              <h2 className="text-2xl md:text-4xl font-bold text-card mb-2">
                С Новым годом!
              </h2>
              <p className="text-card/90 mb-4 text-sm md:text-base">
                Пусть все мечты сбываются, а поставленные цели обязательно достигаются!
              </p>
              <Button variant="default" size="lg">
                Перейти в каталог
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
