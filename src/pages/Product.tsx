import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart, Star, Truck, Shield, Phone, MessageCircle } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-secondary">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-secondary">Каталог</Link>
          <span>/</span>
          <span className="text-foreground">Товар #{id}</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <img src="/placeholder.svg" alt="Товар" className="w-full aspect-square object-contain" />
          </div>
          
          <div>
            <span className="text-sm text-muted-foreground">Арт: 40904.1004018</span>
            <h1 className="text-2xl font-bold text-foreground mt-2 mb-4">Поршневая группа ЗМЗ-409</h1>
            
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
              ))}
              <span className="text-muted-foreground">(24 отзыва)</span>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-foreground">12 500 ₽</span>
              <span className="text-muted-foreground line-through ml-3">14 000 ₽</span>
            </div>
            
            <div className="flex gap-3 mb-6">
              <Button variant="secondary" size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                В корзину
              </Button>
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Truck className="h-5 w-5 text-secondary" />
                <span>Доставка по всей России</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
