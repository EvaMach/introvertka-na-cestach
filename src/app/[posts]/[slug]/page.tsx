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
  const postUrl = `https://introvertkanacestach.cz/${posts}/${slug}`;
  const imageUrl = `https://introvertkanacestach.cz${post.coverImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": posts === "guides" ? "HowTo" : "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Eva Machová",
      url: "https://introvertkanacestach.cz",
    },
    publisher: {
      "@type": "Person",
      name: "Introvertka na cestách",
      logo: {
        "@type": "ImageObject",
        url: "https://introvertkanacestach.cz/favicon/android-chrome-512x512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://introvertkanacestach.cz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: posts === "guides" ? "Průvodci" : "Deník",
        item: `https://introvertkanacestach.cz/${posts}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

  const postUrl = `https://introvertkanacestach.cz/${posts}/${slug}`;
  const imageUrl = `https://introvertkanacestach.cz${post.coverImage}`;

  return {
    title: `${post.title} | Introvertka na cestách`,
    description: post.excerpt,
    authors: [{ name: "Eva Machová" }],
    keywords: [
      "cestování",
      "trekking",
      "příroda",
      "hiking",
      "outdoor",
      "Kungsleden",
      "Švédsko",
      posts === "guides" ? "průvodce" : "cestovní deník",
    ],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "Introvertka na cestách",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "cs_CZ",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Eva Machová"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: "@introvertkanacestach",
    },
  };
}

export async function generateStaticParams() {
  const posts = getPosts("all");

  return posts.map((post) => {
    const [category, slug] = post.path.split("/");
    return {
      posts: category,
      slug: slug.split(".")[0],
    };
  });
}
