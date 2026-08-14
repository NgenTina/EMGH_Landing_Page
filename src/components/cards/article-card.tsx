interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  readMoreText?: string;
}

export default function ArticleCard({ image, title, excerpt, readMoreText = 'Read More' }: ArticleCardProps) {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-full md:w-[280px] snap-start">
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h4 className="font-serif text-lg font-medium text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">{title}</h4>
      <p className="text-sm text-slate-500 line-clamp-2 mb-3">{excerpt}</p>
      <span className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 group-hover:decoration-slate-900 transition-all">
        {readMoreText}
      </span>
    </div>
  );
}
