import { Link } from "react-router-dom";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  article: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  inStock?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  article, 
  price, 
  oldPrice, 
  rating, 
  reviews, 
  image, 
  badge,
  inStock = true 
}: ProductCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <Link to={`/product/${id}`} className="block relative aspect-square bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded ${
            badge === "Хит" ? "bg-accent text-accent-foreground" :
            badge === "Скидка" ? "bg-destructive text-destructive-foreground" :
            badge === "Новинка" ? "bg-primary text-primary-foreground" :
            "bg-secondary text-secondary-foreground"
          }`}>
            {badge}
          </span>
        )}
        {inStock && (
          <span className="absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded bg-primary/20 text-primary border border-primary/30">
            В наличии
          </span>
        )}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button variant="secondary" size="sm" className="mr-2">
            <Eye className="h-4 w-4 mr-1" />
            Подробнее
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">
          Арт: {article}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 min-h-[40px] hover:text-secondary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`} 
            />
          ))}
          {reviews > 0 && (
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
          )}
        </div>

        {/* Price & Cart */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-foreground">
              {price.toLocaleString()} ₽
            </p>
            {oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {oldPrice.toLocaleString()} ₽
              </p>
            )}
          </div>
          <Button variant="cart" size="icon" className="h-9 w-9">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
