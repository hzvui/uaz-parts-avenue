import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" id="contacts">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>г. Ульяновск, Московское шоссе 5Г</li>
              <li>
                <a href="tel:+79372700026" className="text-primary hover:underline font-medium">
                  +7 937 270 00 26
                </a>
              </li>
              <li>
                <a href="mailto:info@magazin469-452.ru" className="hover:text-primary">
                  info@magazin469-452.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Магазин */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Магазин</h3>
            <ul className="space-y-2 text-sm">
              {["О нас", "Подарочные сертификаты", "Торговые марки", "Карта сайта", "Блог", "Новинки", "Акции"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Покупательский сервис */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Покупательский сервис</h3>
            <ul className="space-y-2 text-sm">
              {["Ваши заказы", "Сертификаты", "Платежи", "Бренды", "Отложенные", "Пользовательское соглашение", "Политика конфиденциальности"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Моя учетная запись */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Моя учетная запись</h3>
            <ul className="space-y-2 text-sm">
              {["Войти", "Создать учетную запись"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Магазин469-452.ru — Запчасти УАЗ. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Способы оплаты:</span>
            <div className="flex gap-2">
              <div className="h-6 px-2 bg-muted rounded flex items-center justify-center text-xs font-medium text-muted-foreground">VISA</div>
              <div className="h-6 px-2 bg-muted rounded flex items-center justify-center text-xs font-medium text-muted-foreground">MC</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
