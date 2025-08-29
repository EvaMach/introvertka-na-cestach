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
  const files = fs.readdirSync(join(postsDirectory, subfolder));
  return files.filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.(mdx)$/, "");
  const fullPath = join(postsDirectory, `/journal/${realSlug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(postType: PostType): Post[] {
  const slugs = getPostSlugs(postType);
  const posts = slugs
    .map((slug) => {
      const cleanSlug = slug.replace(/\.(mdx)$/, "");
      return getPostBySlug(cleanSlug);
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
