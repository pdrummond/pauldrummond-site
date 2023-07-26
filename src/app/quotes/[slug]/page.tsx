import DotLink from "@/components/DotLink";
import QuoteCard from "@/components/QuoteCard";
import { getAllQuoteSlugs, getQuote } from "@/data/quotes";

export async function generateStaticParams() {
  const quotes = getAllQuoteSlugs();
  return quotes.map((slug) => ({ slug }));
}

export default function QuotePage(props: any) {
  const slug = props.params.slug;
  const quote = getQuote(slug);

  return (
    <div>
      <DotLink />
      <QuoteCard quote={quote} />
    </div>
  );
}
