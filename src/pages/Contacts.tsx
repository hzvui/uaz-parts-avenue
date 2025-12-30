import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contacts = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Контакты</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Телефон</h3>
                <a href="tel:+79372700026" className="text-xl text-secondary hover:underline">+7 937 270 00 26</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:info@magazin469-452.ru" className="text-muted-foreground hover:text-secondary">info@magazin469-452.ru</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Сб-Вс: выходной</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Доставка</h3>
                <p className="text-muted-foreground">По всей России</p>
              </div>
            </div>
            
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/79372700026" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Напишите нам</h2>
            <p className="text-muted-foreground">
              Свяжитесь с нами по телефону или WhatsApp для консультации и подбора запчастей.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
