import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" id="contacts">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <Link to="/" className="block mb-4">
              <h2 className="text-xl font-bold text-foreground">
                Магазин<span className="text-secondary">469-452</span>.ru
              </h2>
              <p className="text-xs text-muted-foreground">
                Запчасти УАЗ от А до Я
              </p>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Магазин автозапчастей для автомобилей УАЗ. 
              Более 15 000 наименований в наличии.
            </p>
            <a 
              href="https://wa.me/79372700026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Каталог */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-secondary">КАТАЛОГ</h3>
            <ul className="space-y-2">
              {[
                { name: "Двигатель", slug: "engine" },
                { name: "Трансмиссия", slug: "transmission" },
                { name: "Ходовая часть", slug: "suspension" },
                { name: "Тормозная система", slug: "brakes" },
                { name: "Электрика", slug: "electric" },
                { name: "Кузов и салон", slug: "body" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link to={`/category/${item.slug}`} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-secondary">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">О компании</Link></li>
              <li><Link to="/delivery" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/contacts" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Контакты</Link></li>
              <li><Link to="/catalog" className="text-sm text-muted-foreground hover:text-secondary transition-colors">Каталог</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-secondary">КОНТАКТЫ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+79372700026" className="text-foreground font-bold hover:text-secondary transition-colors">
                    +7 937 270 00 26
                  </a>
                  <p className="text-xs text-muted-foreground">Звоните!</p>
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
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Магазин469-452.ru — Запчасти УАЗ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
