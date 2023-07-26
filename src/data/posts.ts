import { Post } from "@/types/Post";
import fs from "fs";
import matter from "gray-matter";
import { getSlug } from "./slugs";

export function getPostsMetaData(): Post[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        draft: matterResult.data.draft,
        content: matterResult.content,
        slug: getSlug(fileName),
      };
    })
    .filter((post) => post.draft != true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostContent(slug: string): Post {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    draft: matterResult.data.draft,
    content: matterResult.content,
    slug,
  };
}
