import Header from "@/components/Header";
import PostPreview from "@/components/PostPreview";
import QuoteLink from "@/components/QuoteLink";
import { getPostsMetaData } from "@/data/posts";
import Image from "next/image";

/*
    Not used right now but keeping this in case I want to 
    experiment further with the grid layout concept.
*/

export default function Home() {
  const postMetadata = getPostsMetaData();
  return (
    <main>
      <div className="z-0">
        <Image
          src="/images/skye3.jpg"
          fill={true}
          alt="Photo of my favourite place, Isle of Skye"
          className="blur saturate-100 "
        />
      </div>
      <div className="grid grid-cols-1 h-screen 2xl:grid-cols-2">
        <div className="c-left hidden 2xl:block" />
        <div className="c-right z-10 bg-white p-8 overflow-auto">
          <QuoteLink />
          <div className="max-2xl:mx-auto max-2xl:max-w-4xl">
            <Header />
            {postMetadata.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
