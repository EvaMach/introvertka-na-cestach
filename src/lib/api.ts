import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Post = {
  path: string;
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

const postsDirectory = join(process.cwd(), "_posts");
const subDirectories = fs.readdirSync(postsDirectory);
type PostsType = (typeof subDirectories)[number] | "all";

const getPostsPaths = (postsType: PostsType) => {
  if (postsType === "all") {
    return subDirectories.flatMap((subDir) =>
      fs
        .readdirSync(join(postsDirectory, subDir))
        .map((file) => `${subDir}/${file}`)
    );
  }
  return fs
    .readdirSync(join(postsDirectory, postsType))
    .map((file) => `${postsType}/${file}`);
};

export const getPostByPath = (path: string): Post => {
  const fullPath = join(postsDirectory, `${path}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, path, content } as Post;
};

export const getPosts = (postsType: PostsType): Post[] => {
  const paths = getPostsPaths(postsType);
  const posts = paths.map((path) => getPostByPath(path));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
