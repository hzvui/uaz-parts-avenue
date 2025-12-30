import Layout from "@/components/Layout";
import { Truck, CreditCard, Clock, MapPin } from "lucide-react";

const Delivery = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Доставка и оплата</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Truck className="h-10 w-10 text-secondary mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-3">Доставка</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Транспортные компании (СДЭК, ПЭК, Деловые линии)</li>
              <li>• Почта России</li>
              <li>• Курьерская доставка по городу</li>
              <li>• Самовывоз со склада</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <CreditCard className="h-10 w-10 text-secondary mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-3">Оплата</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Банковские карты (Visa, MasterCard, МИР)</li>
              <li>• Безналичный расчёт (с НДС и без)</li>
              <li>• Наложенный платёж</li>
              <li>• Наличными при самовывозе</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Delivery;
