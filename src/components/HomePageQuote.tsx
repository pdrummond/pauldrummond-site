import Quote from "@/types/Quote";
import Link from "next/link";

interface Props {
  quote: Quote;
}

export default function HomePageQuote({ quote }: Props) {
  return (
    <figure className="max-w-screen-md mx-auto colourful-background text-center p-5 rounded-3xl">
      <svg
        className="w-5 h-5 mx-auto mb-3 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>{" "}
      <blockquote>
        <p className="text-xl font-bold text-gray-600 ">{quote.content}</p>
        <Link href={`/quote-card/${quote.slug}`}>
          <cite className="pr-3 font-medium text-gray-900 hover:underline">
            {quote.cite}
          </cite>
        </Link>
      </blockquote>
    </figure>
  );
}
