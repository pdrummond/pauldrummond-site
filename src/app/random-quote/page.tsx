import HomeIcon from "@/components/HomeIcon";
import QuoteCard from "@/components/QuoteCard";
import QuoteHardLink from "@/components/QuoteHardLink";
import { getQuote, getRandomQuoteSlug } from "@/data/quotes";

export const revalidate = 0;

export default function QuotePage() {
  const slug = getRandomQuoteSlug();
  return (
    <div>
      <HomeIcon />
      <QuoteCard quote={getQuote(slug)} />
      <QuoteHardLink slug={slug} />
    </div>
  );
}
