import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export type PostType = "journal" | "guide";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(subfolder: PostType) {
  return fs.readdirSync(join(postsDirectory, subfolder));
}

export function getPostBySlug(slug: string): Post {
  console.log("slug", slug);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `/journal/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(postType: PostType): Post[] {
  const slugs = getPostSlugs(postType);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
