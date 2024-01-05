import Header from "@/components/Header";
import QuotePreview from "@/components/QuotePreview";
import { getQuotesMetaData } from "@/data/quotes";

export default function Home() {
  const quotesMetadata = getQuotesMetaData();

  return (
    <main>
      <div className="mx-auto max-w-3xl max-sm:max-w-sm max-lg:max-w-lg">
        <Header />
        <div className="pt-8 grid gap-10">
          {quotesMetadata.map((quote) => (
            <QuotePreview key={quote.slug} quote={quote} />
          ))}
        </div>
      </div>
    </main>
  );
}
