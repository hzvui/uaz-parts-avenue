import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

const Cart = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Корзина</h1>
        
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
          <Button variant="secondary" asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
