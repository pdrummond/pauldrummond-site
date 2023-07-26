import Quote from "@/types/Quote";
import Link from "next/link";

interface QuoteCardProps {
  quote: Quote;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="grid h-screen place-items-center p-10 colourful-background">
      <figure className="max-w-screen-md mx-auto text-center">
        <Link href={`/quotes/${quote.slug}`}>
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </Link>
        <blockquote>
          <p className="text-4xl italic font-bold text-gray-600">
            {quote.content}
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-500 ">
            <cite className="pr-3 font-medium text-gray-900">{quote.cite}</cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
