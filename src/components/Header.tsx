import { Phone, ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">АЗ</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground leading-tight">
                  Магазин469-452.ru
                </h1>
                <p className="text-xs text-muted-foreground">
                  Запчасти УАЗ от А до Я
                </p>
              </div>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Ищите товары по названию, артикулу или VIN..." 
                className="w-full h-10 pl-4 pr-12 bg-background border-border text-foreground placeholder:text-muted-foreground rounded"
              />
              <Button size="icon" className="absolute right-0 top-0 h-10 w-10 rounded-l-none" variant="default">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Phone & Cart */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end">
              <a href="tel:+79372700026" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                +7 937 270 00 26
              </a>
              <span className="text-xs text-muted-foreground">Звоните, поможем!</span>
            </div>

            <a href="tel:+79372700026" className="md:hidden w-10 h-10 rounded bg-primary flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </a>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="default" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>

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
        <div className="lg:hidden mt-3">
          <div className="relative w-full">
            <Input 
              type="text" 
              placeholder="Поиск запчастей..." 
              className="w-full h-10 pl-4 pr-12 bg-background border-border"
            />
            <Button size="icon" className="absolute right-0 top-0 h-10 w-10 rounded-l-none" variant="default">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-primary ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="container">
          <ul className="flex flex-col lg:flex-row lg:items-center gap-0 py-0">
            {[
              { name: "Рулевое управление", href: "#" },
              { name: "Тормозная система", href: "#" },
              { name: "Трансмиссия", href: "#" },
              { name: "Ходовая", href: "#" },
              { name: "Внедорожка", href: "#" },
              { name: "Кузов и салон", href: "#" },
              { name: "Двигатель", href: "#" },
              { name: "Электрооборудование", href: "#" },
            ].map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="block px-4 py-3 text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
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
