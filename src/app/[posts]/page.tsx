import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getPosts } from "@/lib/api";
import Menu from "../_components/menu";

interface Params {
  params: Promise<{
    posts: string;
  }>;
}

export default async function Index(params: Params) {
  const { posts } = await params.params;
  const allPosts = getPosts(posts);

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div>
      <Menu />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        path={heroPost.path}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
  );
}
