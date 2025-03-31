
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-rapidismo-orange mb-6">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</p>
        <p className="text-gray-600 mb-8">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild className="bg-rapidismo-orange hover:bg-rapidismo-orange/90">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
