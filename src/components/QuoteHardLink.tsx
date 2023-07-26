import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface Props {
  slug: string;
}

export default function QuoteHardLink(props: Props) {
  return (
    <div className="text-slate-600 hover:text-orange-600 ease-in duration-300 hover:scale-150 absolute bottom-0 left-0 m-5 text-xl">
      <Link href={`/quote-card/${props.slug}`}>
        <FaLink />
      </Link>
    </div>
  );
}
