import Markdown from "markdown-to-jsx";
import { getPostContent, getPostsMetaData } from "@/data/posts";
import PostDetailHeader from "@/components/PostDetailHeader";

export async function generateStaticParams() {
  const posts = getPostsMetaData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <PostDetailHeader post={post} />
      <article className="prose prose-stone max-w-none pt-5">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
