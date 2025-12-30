import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Link, useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Поршневая группа ЗМЗ-409", article: "40904.1004018", price: 12500, rating: 4.8, reviews: 24, image: "/placeholder.svg" },
  { id: 2, name: "Комплект сцепления УАЗ", article: "3160-1601130", price: 8900, rating: 4.9, reviews: 56, image: "/placeholder.svg" },
  { id: 3, name: "Рессора передняя УАЗ 469", article: "469-2902012", price: 4500, rating: 4.7, reviews: 18, image: "/placeholder.svg" },
  { id: 4, name: "Стартер УАЗ Patriot", article: "406.3708000", price: 7800, rating: 4.6, reviews: 31, image: "/placeholder.svg" },
];

const categoryNames: Record<string, string> = {
  engine: "Двигатель",
  transmission: "Трансмиссия",
  suspension: "Ходовая часть",
  brakes: "Тормозная система",
  body: "Кузов и салон",
  electric: "Электрика",
  steering: "Рулевое управление",
  offroad: "Внедорожка",
};

const Category = () => {
  const { slug } = useParams();
  const categoryName = categoryNames[slug || ""] || "Категория";

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-secondary">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-secondary">Каталог</Link>
          <span>/</span>
          <span className="text-foreground">{categoryName}</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{categoryName}</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
