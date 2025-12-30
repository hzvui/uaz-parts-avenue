import { Phone, ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Магазин<span className="text-secondary">469-452</span>.ru
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Запчасти УАЗ от А до Я
              </p>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Поиск по артикулу или названию..." 
                className="w-full h-12 pl-4 pr-12 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button size="icon" className="absolute right-1 top-1 h-10 w-10" variant="default">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Phone & Cart */}
          <div className="flex items-center gap-4">
            <a href="tel:+79372700026" className="hidden md:flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-uaz-green-light transition-colors">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground font-heading">+7 937 270 00 26</p>
                <p className="text-xs text-muted-foreground">Звоните, поможем!</p>
              </div>
            </a>

            <Button variant="cart" size="icon" className="relative h-12 w-12">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden mt-4">
          <div className="relative w-full">
            <Input 
              type="text" 
              placeholder="Поиск запчастей..." 
              className="w-full h-10 pl-4 pr-12 bg-input border-border"
            />
            <Button size="icon" className="absolute right-1 top-1 h-8 w-8" variant="default">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-primary ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="container">
          <ul className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0 py-2 lg:py-0">
            {[
              { name: "Каталог", href: "#catalog", highlight: true },
              { name: "Двигатель", href: "#engine" },
              { name: "Трансмиссия", href: "#transmission" },
              { name: "Ходовая", href: "#suspension" },
              { name: "Кузов", href: "#body" },
              { name: "Электрика", href: "#electric" },
              { name: "Доставка", href: "#delivery" },
              { name: "Контакты", href: "#contacts" },
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={`block px-4 py-3 text-sm font-heading uppercase tracking-wider transition-colors ${
                    item.highlight 
                      ? 'bg-secondary text-secondary-foreground hover:bg-sand-light' 
                      : 'text-primary-foreground hover:bg-uaz-green-light'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
