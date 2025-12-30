import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-card/80 border-b border-border py-2">
      <div className="container flex flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-secondary" />
            <span>Пн-Пт: 9:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>Доставка по всей России</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/79372700026" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] hover:text-[#20BD5A] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a href="mailto:info@magazin469-452.ru" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">info@magazin469-452.ru</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
