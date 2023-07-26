import fs from "fs";
import matter from "gray-matter";
import Quote from "@/types/Quote";
import { getRandomInt } from "@/utils/getRandomInt";
import { getSlug } from "./slugs";

export function getAllQuoteSlugs(): string[] {
  const folder = "quotes/";
  const files = fs.readdirSync(folder);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => getSlug(file));
}

export function getRandomQuote(): Quote {
  return getQuote(getRandomQuoteSlug());
}

export function getRandomQuoteSlug(): string {
  const folder = "quotes/";
  const files = fs.readdirSync(folder);
  const quotes = files.filter((file) => file.endsWith(".md"));
  const randomIdx = getRandomInt(files.length);
  const randomQuoteFile = quotes.at(randomIdx) || "quote_001.md";
  return getSlug(randomQuoteFile);
}

export function getQuote(slug: string): Quote {
  const folder = "quotes/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    content: matterResult.content,
    cite: matterResult.data.cite,
    slug,
  };
}
