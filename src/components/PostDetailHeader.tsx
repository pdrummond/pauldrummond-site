import Date from "./Date";
import { Post } from "@/types/Post";

export default function PostDetailHeader({ post }: { post: Post }) {
  return (
    <div className="border-b">
      <div className="text-sm text-gray-400">
        <Date value={post.date} />
      </div>
      <h1 className="max-lg:text-2xl text-3xl font-bold text-slate-800 text-bold">
        {post.title}
      </h1>
      <p className="max-sm:text-sm text-xl text-slate-600 mt-2 mb-5">
        {post.subtitle}
      </p>
    </div>
  );
}
