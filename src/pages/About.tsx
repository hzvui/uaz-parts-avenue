import Layout from "@/components/Layout";
import { Shield, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">О компании</h1>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Магазин469-452.ru</strong> — ваш надёжный поставщик запчастей для автомобилей УАЗ. Мы работаем более 15 лет и знаем каждую деталь вашего автомобиля.
          </p>
          <p className="text-muted-foreground">
            В нашем каталоге более 15 000 наименований запчастей для всех моделей УАЗ: 469, 452 «Буханка», Hunter, Patriot и других.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <Clock className="h-10 w-10 text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-foreground text-xl mb-2">15+ лет</h3>
            <p className="text-muted-foreground">опыта работы</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <Shield className="h-10 w-10 text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-foreground text-xl mb-2">15 000+</h3>
            <p className="text-muted-foreground">товаров в каталоге</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-foreground text-xl mb-2">10 000+</h3>
            <p className="text-muted-foreground">довольных клиентов</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
