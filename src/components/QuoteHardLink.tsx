import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface Props {
  slug: string;
}

export default function QuoteHardLink(props: Props) {
  return (
    <div
      title="Permalink"
      className="text-slate-600 hover:text-orange-600 ease-in duration-300 hover:scale-150 absolute bottom-0 right-0 m-5 text-xl"
    >
      <Link href={`/quotes/${props.slug}`}>
        <FaLink />
      </Link>
    </div>
  );
}
