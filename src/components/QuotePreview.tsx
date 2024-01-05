import Quote from "@/types/Quote";
import Link from "next/link";

interface Props {
  quote: Quote;
}

export default function QuotePreview({ quote }: Props) {
  return (
    <div className="p-5">
      <h1 className="text-2xl text-slate-800 text-bold">
        <Link
          href={`/quote-card/${quote.slug}`}
          className="font-bold hover:underline"
        >
          {quote.content}
        </Link>
      </h1>
      <p title={quote.slug} className="text-sm text-slate-600 mt-2 mb-5">
        {quote.cite}
      </p>
    </div>
  );
}
