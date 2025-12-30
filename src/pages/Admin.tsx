import { useState } from "react";
import { Package, Plus, Edit, ShoppingCart, Eye, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Tab = "orders" | "add-product" | "edit-products";

const mockOrders = [
  { id: "ORD-001", date: "2024-01-15", customer: "Иванов И.И.", phone: "+7 999 123 45 67", total: 15600, status: "new" },
  { id: "ORD-002", date: "2024-01-14", customer: "Петров П.П.", phone: "+7 999 234 56 78", total: 8900, status: "processing" },
  { id: "ORD-003", date: "2024-01-13", customer: "Сидоров С.С.", phone: "+7 999 345 67 89", total: 23400, status: "shipped" },
  { id: "ORD-004", date: "2024-01-12", customer: "Козлов К.К.", phone: "+7 999 456 78 90", total: 5600, status: "delivered" },
];

const mockProducts = [
  { id: 1, name: "Амортизатор передний УАЗ Патриот", category: "Подвеска", price: 3500, stock: 24 },
  { id: 2, name: "Тормозные колодки УАЗ 469", category: "Тормозная система", price: 1200, stock: 56 },
  { id: 3, name: "Фильтр масляный УАЗ", category: "Фильтры", price: 450, stock: 120 },
  { id: 4, name: "Карбюратор К-151", category: "Двигатель", price: 8500, stock: 8 },
  { id: 5, name: "Рулевая тяга УАЗ Хантер", category: "Рулевое управление", price: 2800, stock: 15 },
];

const categories = [
  "Двигатель",
  "Трансмиссия", 
  "Подвеска",
  "Тормозная система",
  "Рулевое управление",
  "Электрика",
  "Кузов",
  "Фильтры",
];

const getStatusBadge = (status: string) => {
  const statusMap: Record<string, { label: string; className: string }> = {
    new: { label: "Новый", className: "bg-blue-500 hover:bg-blue-600" },
    processing: { label: "В обработке", className: "bg-yellow-500 hover:bg-yellow-600" },
    shipped: { label: "Отправлен", className: "bg-purple-500 hover:bg-purple-600" },
    delivered: { label: "Доставлен", className: "bg-green-500 hover:bg-green-600" },
  };
  const { label, className } = statusMap[status] || { label: status, className: "" };
  return <Badge className={className}>{label}</Badge>;
};

const Admin = () => {
  const [activeTab, setActiveTab] = useState<Tab>("orders");
  const [editingProduct, setEditingProduct] = useState<number | null>(null);

  const tabs = [
    { id: "orders" as Tab, label: "Заказы", icon: ShoppingCart },
    { id: "add-product" as Tab, label: "Добавить товар", icon: Plus },
    { id: "edit-products" as Tab, label: "Редактировать товары", icon: Edit },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Панель администратора</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2"
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Управление заказами
            </h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ Заказа</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Покупатель</TableHead>
                    <TableHead>Телефон</TableHead>
                    <TableHead>Сумма</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.phone}</TableCell>
                      <TableCell>{order.total.toLocaleString()} ₽</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Select defaultValue={order.status}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">Новый</SelectItem>
                              <SelectItem value="processing">В обработке</SelectItem>
                              <SelectItem value="shipped">Отправлен</SelectItem>
                              <SelectItem value="delivered">Доставлен</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Add Product Tab */}
        {activeTab === "add-product" && (
          <div className="bg-card rounded-lg border border-border p-6 max-w-2xl">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Добавить новый товар
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Название товара</label>
                <Input placeholder="Например: Амортизатор передний УАЗ Патриот" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Категория</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Артикул</label>
                <Input placeholder="Например: UAZ-AM-001" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Цена (₽)</label>
                  <Input type="number" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Количество на складе</label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Совместимость с моделями</label>
                <div className="flex flex-wrap gap-2">
                  {["УАЗ 469", "УАЗ 452", "УАЗ Патриот", "УАЗ Хантер"].map((model) => (
                    <label key={model} className="flex items-center gap-2 bg-muted px-3 py-2 rounded cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание</label>
                <Textarea placeholder="Подробное описание товара..." rows={4} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Изображения</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Package className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">Перетащите изображения сюда или нажмите для выбора</p>
                  <Button variant="outline" className="mt-4">Выбрать файлы</Button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Добавить товар
              </Button>
            </form>
          </div>
        )}

        {/* Edit Products Tab */}
        {activeTab === "edit-products" && (
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Редактирование товаров
            </h2>

            <div className="mb-4">
              <Input placeholder="Поиск товаров..." className="max-w-md" />
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Название</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>На складе</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell>
                        {editingProduct === product.id ? (
                          <Input defaultValue={product.name} className="max-w-xs" />
                        ) : (
                          product.name
                        )}
                      </TableCell>
                      <TableCell>
                        {editingProduct === product.id ? (
                          <Select defaultValue={product.category}>
                            <SelectTrigger className="w-40">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          product.category
                        )}
                      </TableCell>
                      <TableCell>
                        {editingProduct === product.id ? (
                          <Input type="number" defaultValue={product.price} className="w-24" />
                        ) : (
                          `${product.price.toLocaleString()} ₽`
                        )}
                      </TableCell>
                      <TableCell>
                        {editingProduct === product.id ? (
                          <Input type="number" defaultValue={product.stock} className="w-20" />
                        ) : (
                          product.stock
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {editingProduct === product.id ? (
                            <>
                              <Button size="sm" onClick={() => setEditingProduct(null)}>
                                Сохранить
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => setEditingProduct(null)}>
                                Отмена
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button variant="outline" size="sm" onClick={() => setEditingProduct(product.id)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Admin;
