import Header from "@/components/Header";
import PostPreview from "@/components/PostPreview";
import { getPostsMetaData } from "@/data/posts";

export default function Home() {
  const postMetadata = getPostsMetaData();
  return (
    <main>
      <div className="mx-auto max-w-3xl max-sm:max-w-sm max-lg:max-w-lg">
        <Header />
        <div className="pt-8 grid gap-10">
          {postMetadata.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
