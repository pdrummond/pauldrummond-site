import DotLink from "@/components/DotLink";
import QuoteCard from "@/components/QuoteCard";
import { getAllQuoteSlugs, getQuote, getRandomQuoteSlug } from "@/data/quotes";

export const revalidate = 0;

export async function generateStaticParams() {
  const quotes = getAllQuoteSlugs();
  return quotes.map((slug) => ({ slug }));
}

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
