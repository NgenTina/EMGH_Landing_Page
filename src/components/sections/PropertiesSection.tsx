import { useLanguage } from '../../contexts/LanguageContext';
import SectionHeading from '../ui/SectionHeading';
import PropertyCard from '../cards/PropertyCard';

export default function PropertiesSection() {
  const { t } = useLanguage();

  const properties = [
    { title: t.featured.futuristic, price: "$120/night", beds: "1 King Bed", baths: "1 Bath", sqft: "35m²", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" },
    { title: t.featured.minimalist, price: "$95/night", beds: "2 Queen Beds", baths: "1 Bath", sqft: "28m²", img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" },
    { title: "Garden View Room", price: "$85/night", beds: "1 Double Bed", baths: "1 Bath", sqft: "25m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    { title: "Deluxe Suite", price: "$150/night", beds: "1 King Bed", baths: "1 Bath", sqft: "45m²", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop" },
    { title: "Cozy Attic Room", price: "$70/night", beds: "1 Single Bed", baths: "Shared Bath", sqft: "18m²", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" },
  ];

  return (
    <section id="properties" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.properties.subtitle}
          title={t.properties.title}
        />

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {properties.map((prop, idx) => (
              <PropertyCard key={idx} {...prop} image={prop.img} featured={idx === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
