import Link from "next/link";
import Date from "./Date";
import { Post } from "@/types/Post";

export default function PostPreview({ post }: { post: Post }) {
  return (
    <div key={post.slug} className="border-b">
      {/*<div className="text-sm text-gray-400">
        <Date value={post.date} />
      </div>*/}
      <h1 className="text-2xl text-slate-800 text-bold">
        <Link
          href={`/posts/${post.slug}`}
          className="font-bold hover:underline"
        >
          {post.title}
        </Link>
      </h1>
      <p className="text-xl text-slate-600 mt-2 mb-5">{post.subtitle}</p>
    </div>
  );
}
