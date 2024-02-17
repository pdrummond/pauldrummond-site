import Header from "@/components/Header";
import QuotePreview from "@/components/QuotePreview";
import { getQuotesMetaData } from "@/data/quotes";
import Link from "next/link";

export default function Home() {
  const quotesMetadata = getQuotesMetaData();

  return (
    <main>
      <div className="mx-auto max-w-3xl max-sm:max-w-sm max-lg:max-w-lg">
        <Header />

        <ul className="flex items-center justify-center">
          <li className="mr-3">
            <Link
              className="inline-block border border-white rounded hover:border-gray-200 text-gray-400 hover:bg-gray-200 py-1 px-3"
              href="/random-quote"
            >
              Random Quote
            </Link>
          </li>
        </ul>

        <div className="pt-8 grid gap-10">
          {quotesMetadata.reverse().map((quote) => (
            <QuotePreview key={quote.slug} quote={quote} />
          ))}
        </div>
      </div>
    </main>
  );
}
