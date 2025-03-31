
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, MapPin, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="rapidismo-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Location */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold text-rapidismo-orange">
              Rapidismo
            </Link>
            <div className="hidden md:flex items-center gap-1 text-sm text-gray-600">
              <MapPin size={16} />
              <span>Tu ubicación</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Buscar restaurantes, tiendas, productos..." 
                className="pl-10 w-full" 
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative" 
              asChild
            >
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-rapidismo-orange text-white" 
                    variant="destructive"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
            >
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-4 grid gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>Tu ubicación</span>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Buscar..." 
                      className="pl-10 w-full" 
                    />
                  </div>
                  <nav className="grid gap-2">
                    <Link to="/" className="p-2 hover:bg-gray-100 rounded-md">
                      Inicio
                    </Link>
                    <Link to="/restaurants" className="p-2 hover:bg-gray-100 rounded-md">
                      Restaurantes
                    </Link>
                    <Link to="/grocery" className="p-2 hover:bg-gray-100 rounded-md">
                      Supermercados
                    </Link>
                    <Link to="/pharmacy" className="p-2 hover:bg-gray-100 rounded-md">
                      Farmacias
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
