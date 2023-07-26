import DotLink from "@/components/DotLink";
import QuoteCard from "@/components/QuoteCard";
import { getQuote, getRandomQuoteSlug } from "@/data/quotes";

export const revalidate = 0;

export default function QuotePage() {
  const slug = getRandomQuoteSlug();
  console.log("Rendering QuotePage with quote:", slug);
  return (
    <div>
      <DotLink />
      <QuoteCard quote={getQuote(slug)} />
    </div>
  );
}
