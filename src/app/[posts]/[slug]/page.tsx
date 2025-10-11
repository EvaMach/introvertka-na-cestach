import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPostByPath } from "@/lib/api";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

interface Params {
  params: Promise<{
    posts: string;
    slug: string;
  }>;
}

export default async function Post(props: Params) {
  const { posts, slug } = await props.params;
  const post = getPostByPath(`${posts}/${slug}`);

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

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { posts, slug } = await props.params;
  const post = getPostByPath(`${posts}/${slug}`);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | Introvertka na cestách`,
    description: post.excerpt,
    alternates: {
      canonical: `https://introvertkanacestach.cz/${posts}/${slug}`,
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
  const posts = getPosts("all");

  return posts.map((post) => {
    const [category, slug] = post.path.split("/");
    return {
      posts: category,
      slug: slug,
    };
  });
}
