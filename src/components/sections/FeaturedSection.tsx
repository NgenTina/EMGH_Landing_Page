import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import SectionHeading from "../ui/SectionHeading";

export default function FeaturedSection() {
  const { t } = useLanguage();

  const featuredProperties = [
    {
      num: "01",
      title: t.featured.futuristic,
      image: "/image-03.jpg",
      desc: t.featured.description,
    },
    {
      num: "02",
      title: t.featured.minimalist,
      image: "/image-02.jpg",
      desc: t.featured.description,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.featured.subtitle}
          title={t.featured.title}
        />

        <div className="grid md:grid-cols-2 gap-12">
          {featuredProperties.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-6">
                <span className="text-4xl font-serif text-slate-200 font-bold pt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
