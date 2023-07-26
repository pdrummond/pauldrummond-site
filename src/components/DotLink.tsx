import Link from "next/link";

export default function DotLink() {
  return (
    <div>
      <Link href="/">
        <div className="text-slate-600 hover:text-orange-600 ease-in duration-300 hover:scale-150 absolute bottom-0 right-0 m-5 text-xl">
          ⬤
        </div>
      </Link>
    </div>
  );
}
