import DotLink from "@/components/DotLink";
import QuoteCard from "@/components/QuoteCard";
import { getRandomQuote } from "@/data/quotes";

export default function QuotePage() {
  return (
    <div>
      <DotLink />
      <QuoteCard quote={getRandomQuote()} />
    </div>
  );
}
