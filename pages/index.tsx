import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: { posts: any }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-[50px] font-bold mb-10">Dark Dimension</h1>
      <ul className="flex gap-4 flex-col">
        {posts.map((post: any) => (
          <Link
            href={`/${post.id}`}
            key={post?.id}
            className="text-blue-500 hover:underline"
          >
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}
