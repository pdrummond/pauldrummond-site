import Link from "next/link";
import { RiRefreshFill } from "react-icons/ri";

export default function RefreshQuoteLink() {
  return (
    <div className="text-slate-600 hover:text-orange-600 ease-in duration-300 hover:scale-150 absolute bottom-0 left-0 m-5 text-xl">
      <Link href="/random-quote">
        <RiRefreshFill />
      </Link>
    </div>
  );
}
