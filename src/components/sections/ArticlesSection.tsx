import { useLanguage } from '../../contexts/LanguageContext';
import SectionHeading from '../ui/SectionHeading';
import ArticleCard from '../cards/ArticleCard';

const articles = [
  { title: "The Art of Hospitality Breakfast", excerpt: "Discover how our homemade breakfasts create lasting memories for every guest...", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" },
  { title: "Local Hidden Gems Guide", excerpt: "Explore the best kept-secret spots near our guesthouse that locals love...", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop" },
  { title: "First-Time Guest Guide", excerpt: "Everything you need to know about making the most of your stay with us...", img: "https://images.unsplash.com/photo-1600566753190-17f0bae2d7c0?q=80&w=2070&auto=format&fit=crop" },
  { title: "Seasonal Events & Activities", excerpt: "Check out what's happening in the area during your planned visit dates...", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop" },
];

export default function ArticlesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.articles.subtitle}
          title={t.articles.title}
        />

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} {...article} image={article.img} readMoreText={t.articles.readMore} />
          ))}
        </div>
      </div>
    </section>
  );
}
