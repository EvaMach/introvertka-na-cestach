import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getPosts } from "@/lib/api";
import Menu from "../_components/menu";
import { Metadata } from "next";

interface Params {
  params: Promise<{
    posts: string;
  }>;
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { posts } = await props.params;

  const isGuides = posts === "guides";
  const title = isGuides ? "Průvodci" : "Cestovní deník";
  const description = isGuides
    ? "Průvodci a tipy pro dobrodružství v přírodě - trekking, camping a outdoor aktivity."
    : "Cestovní deník plný zážitků, příběhů a fotografií z cest.";
  const url = `https://introvertkanacestach.cz/${posts}`;

  return {
    title: `${title} | Introvertka na cestách`,
    description,
    keywords: [
      "cestování",
      "trekking",
      "příroda",
      "hiking",
      "outdoor",
      "Skandinávie",
      isGuides ? "průvodce" : "deník",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Introvertka na cestách`,
      description,
      url,
      siteName: "Introvertka na cestách",
      locale: "cs_CZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Introvertka na cestách`,
      description,
      creator: "@introvertkanacestach",
    },
  };
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
