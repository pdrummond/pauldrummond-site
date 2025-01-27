import Link from "next/link";
import { RiRefreshLine } from "react-icons/ri";

/*
    Want to be able to refresh the random quote page but just can't get this to work. What a joke. 
*/

export default function RefreshIcon() {
  return (
    <div title="Refresh">
      <Link href="/random-quote">
        <div
          className="text-slate-600 hover:text-orange-600 ease-in duration-300
        hover:scale-150 absolute m-10 text-xl self-center "
        >
          <RiRefreshLine />
        </div>
      </Link>
    </div>
  );
}
