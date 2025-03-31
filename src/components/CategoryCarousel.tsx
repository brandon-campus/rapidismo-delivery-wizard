
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import CategoryItem from './CategoryItem';

interface Category {
  icon: React.ReactNode;
  name: string;
  link: string;
}

interface CategoryCarouselProps {
  categories: Category[];
  title?: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ 
  categories,
  title 
}) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
      )}
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex gap-4">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              icon={category.icon}
              name={category.name}
              link={category.link}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryCarousel;
