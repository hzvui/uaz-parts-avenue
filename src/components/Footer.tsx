import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-army-dark border-t border-border" id="contacts">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="mb-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Магазин<span className="text-secondary">469-452</span>.ru
              </h2>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Запчасти УАЗ от А до Я
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Магазин автозапчастей для автомобилей УАЗ. 
              Более 15 000 наименований в наличии и под заказ.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/79372700026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:bg-uaz-green-light transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">КАТАЛОГ</h3>
            <ul className="space-y-2">
              {["Двигатель", "Трансмиссия", "Ходовая часть", "Тормозная система", "Электрика", "Кузов и салон"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2">
              {["О компании", "Доставка и оплата", "Гарантия и возврат", "Отзывы", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+79372700026" className="text-foreground font-bold hover:text-secondary transition-colors">
                    +7 937 270 00 26
                  </a>
                  <p className="text-xs text-muted-foreground">Звоните, поможем!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@magazin469-452.ru" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  info@magazin469-452.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб-Вс: выходной</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Доставка по всей России
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Магазин469-452.ru — Запчасти УАЗ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
