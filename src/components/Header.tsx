import { Link } from "react-router-dom";
import { Phone, ShoppingCart, Search, Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const navCategories = [
  { name: "Двигатель", slug: "engine" },
  { name: "Трансмиссия", slug: "transmission" },
  { name: "Ходовая", slug: "suspension" },
  { name: "Тормозная система", slug: "brakes" },
  { name: "Кузов и салон", slug: "body" },
  { name: "Электрика", slug: "electric" },
  { name: "Рулевое управление", slug: "steering" },
  { name: "Внедорожка", slug: "offroad" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center glow-green">
              <span className="text-primary-foreground font-bold text-lg">УАЗ</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">
                Магазин 469-452.ru
              </h1>
              <p className="text-xs text-secondary">
                Запчасти УАЗ от А до Я
              </p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Поиск по артикулу или названию..." 
                className="w-full h-11 pl-4 pr-12 bg-muted border-border text-foreground placeholder:text-muted-foreground rounded-lg"
              />
              <Button size="icon" className="absolute right-1 top-1 h-9 w-9 rounded-md" variant="default">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Phone & Cart */}
          <div className="flex items-center gap-4">
            <a href="tel:+79372700026" className="hidden md:flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center group-hover:bg-uaz-green-light transition-colors glow-green">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-base font-bold text-foreground">+7 937 270 00 26</p>
                <p className="text-xs text-muted-foreground">Звоните!</p>
              </div>
            </a>

            <Link to="/cart" className="relative">
              <Button variant="cart" size="icon" className="h-11 w-11">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

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
              className="w-full h-10 pl-4 pr-12 bg-muted border-border rounded-lg"
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
          <ul className="flex flex-col lg:flex-row lg:items-center">
            <li>
              <Link 
                to="/catalog" 
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium bg-secondary text-secondary-foreground hover:bg-gold-light transition-colors"
              >
                <Menu className="h-4 w-4" />
                Каталог
                <ChevronDown className="h-4 w-4" />
              </Link>
            </li>
            {navCategories.map((item) => (
              <li key={item.slug}>
                <Link 
                  to={`/category/${item.slug}`}
                  className="block px-4 py-3 text-sm text-primary-foreground hover:bg-uaz-green-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
