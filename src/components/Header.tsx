import Image from "next/image";
import Link from "next/link";
import { FaQuoteRight, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between mb-5 pt-10">
      <div className="flex items-center">
        <Link href="/">
          <Image
            className="shadow rounded-full max-w-full h-auto align-middle border-none max-sm:hidden"
            src="/images/me.png"
            alt="image of me"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/" className="pl-5 pr-5 max-sm:pl-0">
          <h1 className="text-orange-400 hover:text-orange-500 text-3xl font-bold max-sm:text-2xl">
            Paul Drummond
          </h1>
        </Link>
      </div>
      <div className="flex justify-center gap-4 text-gray-300 items-center">
        <Link
          title="Random Quote"
          href="/random-quote"
          className="hover:text-orange-400"
        >
          <FaQuoteRight size="1.2em" />
        </Link>
        <Link
          title="Twitter"
          href="https://twitter.com/pdrummond"
          className="hover:text-blue-400"
        >
          <FaTwitter size="1.2em" />
        </Link>
        <Link
          title="Github"
          href="https://github.com/pdrummond"
          className="hover:text-slate-600"
        >
          <FaGithub size="1.2em" />
        </Link>
        <Link
          title="Linked In"
          href="https://linkedin.com/in/paul-drummond"
          className="hover:text-blue-600"
        >
          <FaLinkedin size="1.2em" />
        </Link>
      </div>
    </header>
  );
}
