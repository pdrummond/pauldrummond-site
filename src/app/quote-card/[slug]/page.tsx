import HomeIcon from "@/components/HomeIcon";
import QuoteCardRounded from "@/components/QuoteCardRounded";
import QuotePageLink from "@/components/QuotePageLink";
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
      <QuoteCardRounded quote={quote} />
      <QuotePageLink slug={slug} />
    </div>
  );
}
