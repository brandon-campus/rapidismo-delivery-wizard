
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="rapidismo-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-rapidismo-orange mb-4">Rapidismo</h3>
            <p className="text-sm text-gray-600 mb-4">
              Tu delivery favorito para comida, mercado, farmacia y más.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-rapidismo-orange">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-rapidismo-orange">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.052 10.052 0 01-3.127 1.195A4.92 4.92 0 0016.77 2.1a4.93 4.93 0 00-4.929 4.929 4.93 4.93 0 00.1 1.126A13.98 13.98 0 011.67 3.14a4.93 4.93 0 001.53 6.57 4.93 4.93 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.84 4.91 4.91 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.89 9.89 0 010 19.94a13.94 13.94 0 007.55 2.21 13.94 13.94 0 0014.03-14.03c0-.21 0-.42-.02-.63a10 10 0 002.42-2.54" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-rapidismo-orange">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-rapidismo-orange">Inicio</Link></li>
              <li><Link to="/restaurants" className="text-gray-600 hover:text-rapidismo-orange">Restaurantes</Link></li>
              <li><Link to="/grocery" className="text-gray-600 hover:text-rapidismo-orange">Supermercados</Link></li>
              <li><Link to="/pharmacy" className="text-gray-600 hover:text-rapidismo-orange">Farmacias</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-600 hover:text-rapidismo-orange">Términos de servicio</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-rapidismo-orange">Política de privacidad</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rapidismo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
