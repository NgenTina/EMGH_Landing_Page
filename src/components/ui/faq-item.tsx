import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={cn("font-medium transition-colors", isOpen ? "text-slate-900" : "text-slate-600")}>{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-slate-900" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-6 text-slate-500 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
