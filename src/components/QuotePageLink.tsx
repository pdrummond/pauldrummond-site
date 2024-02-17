import Link from "next/link";
import { AiTwotoneCheckSquare } from "react-icons/ai";

interface Props {
  slug: string;
}

export default function QuotePageLink(props: Props) {
  return (
    <div
      title="Change view"
      className="text-slate-600 hover:text-orange-600 ease-in duration-300 hover:scale-150 absolute bottom-0 left-0 m-5 text-xl"
    >
      <Link href={`/quotes/${props.slug}`}>
        <AiTwotoneCheckSquare />
      </Link>
    </div>
  );
}
