import HomeIcon from "@/components/HomeIcon";
import QuoteCard from "@/components/QuoteCard";
import QuoteCardLink from "@/components/QuoteCardLink";

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
      <HomeIcon />
      <QuoteCardLink slug={slug} />
      <QuoteCard quote={quote} />
    </div>
  );
}
