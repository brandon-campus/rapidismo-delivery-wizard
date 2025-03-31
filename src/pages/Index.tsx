
import React from 'react';
import { ShoppingBag, Coffee, Pizza, Apple, Pill, Gift } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCarousel from '@/components/CategoryCarousel';
import StoreGrid from '@/components/StoreGrid';

// Datos de ejemplo
const categories = [
  { icon: <ShoppingBag size={24} className="text-rapidismo-orange" />, name: "Mercado", link: "/grocery" },
  { icon: <Coffee size={24} className="text-rapidismo-orange" />, name: "Café", link: "/coffee" },
  { icon: <Pizza size={24} className="text-rapidismo-orange" />, name: "Comida", link: "/restaurants" },
  { icon: <Apple size={24} className="text-rapidismo-orange" />, name: "Frutas", link: "/fruits" },
  { icon: <Pill size={24} className="text-rapidismo-orange" />, name: "Farmacia", link: "/pharmacy" },
  { icon: <Gift size={24} className="text-rapidismo-orange" />, name: "Regalos", link: "/gifts" },
];

const stores = [
  {
    id: "1",
    name: "Super Restaurante",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    deliveryTime: "30-45 min",
    deliveryFee: "$2.99",
    tags: ["Hamburguesas", "Comida rápida"],
    featured: true
  },
  {
    id: "2",
    name: "Tacos Deliciosos",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGFjb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    deliveryTime: "25-40 min",
    deliveryFee: "$1.99",
    tags: ["Mexicana", "Tacos"]
  },
  {
    id: "3",
    name: "Pizza Express",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    deliveryTime: "20-35 min",
    deliveryFee: "$1.50",
    tags: ["Pizza", "Italiana"]
  },
  {
    id: "4",
    name: "Sushi Wok",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    deliveryTime: "40-55 min",
    deliveryFee: "$3.50",
    tags: ["Japonesa", "Sushi"]
  }
];

const supermarkets = [
  {
    id: "5",
    name: "Super Market",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    deliveryTime: "45-60 min",
    deliveryFee: "$1.99",
    tags: ["Supermercado", "Orgánico"]
  },
  {
    id: "6",
    name: "Fresh Market",
    image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.4,
    deliveryTime: "40-55 min",
    deliveryFee: "$2.50",
    tags: ["Frutas", "Vegetales"]
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-rapidismo-orange text-white py-12 px-4">
          <div className="rapidismo-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Todo lo que necesitas,<br />entregado rápidamente
            </h1>
            <p className="text-lg mb-6 animate-fade-in">
              ¡Comida, supermercado, farmacia y mucho más!
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="rapidismo-container py-8 space-y-10">
          {/* Categories */}
          <CategoryCarousel 
            categories={categories} 
            title="Categorías"
          />
          
          {/* Featured Restaurants */}
          <StoreGrid
            stores={stores}
            title="Restaurantes populares"
          />
          
          {/* Supermarkets */}
          <StoreGrid
            stores={supermarkets}
            title="Supermercados"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
