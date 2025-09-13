import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  console.log(params, "params");
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = post.content || "";

  return (
    <main>
      <Header />
      <article className="mb-32">
        <PostHeader
          title={post.title}
          excerpt={post.excerpt}
          coverImage={post.coverImage}
          date={post.date}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | Introvertka na cestách`,
    description: post.excerpt,
    alternates: {
      canonical: `https://introvertkanacestach.cz/journal/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage.url],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("journal");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
