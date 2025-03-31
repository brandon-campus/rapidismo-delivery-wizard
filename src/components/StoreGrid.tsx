
import React from 'react';
import StoreCard from './StoreCard';

interface Store {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  tags: string[];
  featured?: boolean;
}

interface StoreGridProps {
  stores: Store[];
  title?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ stores, title }) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            id={store.id}
            name={store.name}
            image={store.image}
            rating={store.rating}
            deliveryTime={store.deliveryTime}
            deliveryFee={store.deliveryFee}
            tags={store.tags}
            featured={store.featured}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreGrid;
