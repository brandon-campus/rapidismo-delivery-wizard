
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  icon: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, name, link, className }) => {
  return (
    <Link
      to={link}
      className={cn(
        "flex flex-col items-center justify-center p-3 rounded-lg transition-all hover:bg-gray-50 hover:scale-105",
        className
      )}
    >
      <div className="flex items-center justify-center h-12 w-12 bg-rapidismo-gray rounded-full mb-2">
        {icon}
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </Link>
  );
};

export default CategoryItem;
