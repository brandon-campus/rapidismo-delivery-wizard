
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, ChevronLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

// Datos de ejemplo
const storeData = {
  "1": {
    id: "1",
    name: "Super Restaurante",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    deliveryTime: "30-45 min",
    deliveryFee: "$2.99",
    tags: ["Hamburguesas", "Comida rápida"],
    featured: true,
    menuCategories: [
      {
        id: "cat1",
        name: "Hamburguesas",
        items: [
          { id: "item1", name: "Hamburguesa Clásica", description: "Carne, lechuga, tomate, queso", price: 8.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
          { id: "item2", name: "Hamburguesa Especial", description: "Doble carne, bacon, queso cheddar", price: 11.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
        ]
      },
      {
        id: "cat2",
        name: "Acompañamientos",
        items: [
          { id: "item3", name: "Papas Fritas", description: "Porción de papas fritas crujientes", price: 3.99, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
          { id: "item4", name: "Aros de Cebolla", description: "Aros de cebolla fritos", price: 4.99, image: "https://images.unsplash.com/photo-1639024471283-03d8a4734733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb24lMjByaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }
        ]
      },
      {
        id: "cat3",
        name: "Bebidas",
        items: [
          { id: "item5", name: "Refresco", description: "Lata de refresco", price: 1.99, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
          { id: "item6", name: "Agua Mineral", description: "Botella de agua mineral", price: 1.49, image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }
        ]
      }
    ]
  }
};

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const StoreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Si no hay ID o el ID no existe en los datos, mostrar un mensaje
  if (!id || !storeData[id]) {
    return <div>Tienda no encontrada</div>;
  }

  const store = storeData[id];

  const addToCart = (item: { id: string; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        // Incrementar la cantidad si el artículo ya está en el carrito
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Añadir nuevo artículo al carrito
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    toast({
      title: "Artículo añadido",
      description: `${item.name} ha sido añadido al carrito`,
      duration: 2000,
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
      
      if (existingItem && existingItem.quantity > 1) {
        // Decrementar la cantidad
        return prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // Eliminar el artículo del carrito
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Store Header */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <Link to="/" className="flex items-center text-white mb-2">
              <ChevronLeft size={16} />
              <span>Volver</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{store.name}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{store.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{store.deliveryTime}</span>
              </div>
              <div>
                Envío: {store.deliveryFee}
              </div>
              <div>
                {store.tags.join(" • ")}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="rapidismo-container py-6">
          {store.menuCategories.map((category) => (
            <div key={category.id} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-32 md:h-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="font-medium mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                          <div className="font-medium">${item.price.toFixed(2)}</div>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button 
                            size="sm" 
                            onClick={() => addToCart(item)}
                            className="bg-rapidismo-orange hover:bg-rapidismo-orange/90"
                          >
                            <Plus size={16} className="mr-1" />
                            Añadir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-4 left-0 right-0 z-10 flex justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="flex items-center gap-2 bg-rapidismo-orange hover:bg-rapidismo-orange/90 py-6 px-6 w-full max-w-sm"
              >
                <ShoppingCart size={20} />
                <span className="font-medium">{getTotalItems()} items</span>
                <span className="mx-2">•</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-96">
              <SheetHeader>
                <SheetTitle>Tu carrito</SheetTitle>
              </SheetHeader>
              <div className="py-4 overflow-auto h-[calc(100%-120px)]">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => addToCart(item)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Envío</span>
                  <span>{store.deliveryFee}</span>
                </div>
                <Button className="w-full bg-rapidismo-orange hover:bg-rapidismo-orange/90">
                  Proceder al pago
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default StoreDetail;
