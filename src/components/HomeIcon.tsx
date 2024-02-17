import Link from "next/link";
import { RiHomeSmileFill } from "react-icons/ri";

export default function HomeIcon() {
  return (
    <div>
      <Link href="/quotes">
        <div className="text-slate-600 hover:text-orange-600 ease-in duration-300 hover:scale-150 absolute m-5 text-xl">
          <RiHomeSmileFill />
        </div>
      </Link>
    </div>
  );
}
