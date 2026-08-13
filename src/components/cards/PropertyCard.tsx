import { MapPin, Bed, Bath, Maximize } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  beds?: string;
  baths?: string;
  sqft?: string;
  location?: string;
  featured?: boolean;
}

export default function PropertyCard({
  image,
  title,
  price,
  beds,
  baths,
  sqft,
  location,
  featured = false
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-full md:w-[300px] snap-start">
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
            FEATURED
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h4 className="font-serif text-lg font-medium text-slate-900 group-hover:text-slate-600 transition-colors">{title}</h4>
        {location && <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin size={14} /> {location}</p>}
        <div className="flex items-center gap-4 text-sm text-slate-500 pt-2">
          {beds && <span className="flex items-center gap-1"><Bed size={14} /> {beds}</span>}
          {baths && <span className="flex items-center gap-1"><Bath size={14} /> {baths}</span>}
          {sqft && <span className="flex items-center gap-1"><Maximize size={14} /> {sqft}</span>}
        </div>
        <p className="text-lg font-semibold text-slate-900 pt-1">{price}</p>
      </div>
    </div>
  );
}
