
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface StoreCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  tags: string[];
  featured?: boolean;
}

const StoreCard: React.FC<StoreCardProps> = ({
  id,
  name,
  image,
  rating,
  deliveryTime,
  deliveryFee,
  tags,
  featured = false
}) => {
  return (
    <Link
      to={`/store/${id}`}
      className={cn(
        "block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        featured ? "border-2 border-rapidismo-orange" : "border border-gray-100"
      )}
    >
      <div className="relative h-36 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
        {featured && (
          <Badge className="absolute top-2 left-2 bg-rapidismo-orange">
            Destacado
          </Badge>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-base">{name}</h3>
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-rapidismo-orange text-rapidismo-orange mr-1" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-gray-500">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{deliveryTime}</span>
          </div>
          <div>
            Envío: {deliveryFee}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
