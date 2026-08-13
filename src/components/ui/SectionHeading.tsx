import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {subtitle && <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">{subtitle}</h3>}
      <h2 className="text-xl md:text-2xl font-medium text-slate-600">{title}</h2>
    </div>
  );
}
