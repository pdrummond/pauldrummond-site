import Header from "@/components/Header";
import HomePageQuote from "@/components/HomePageQuote";
import PostPreview from "@/components/PostPreview";
import { getPostsMetaData } from "@/data/posts";
import { getQuote, getRandomQuoteSlug } from "@/data/quotes";

export default function Home() {
  const postMetadata = getPostsMetaData();
  const slug = getRandomQuoteSlug();
  return (
    <main>
      <div className="mx-auto max-w-3xl max-sm:max-w-sm max-lg:max-w-lg">
        <Header />
        {/*<HomePageQuote quote={getQuote(slug)} />
        <hr className="mt-8" />*/}
        <div className="pt-8 grid gap-10">
          {postMetadata.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
