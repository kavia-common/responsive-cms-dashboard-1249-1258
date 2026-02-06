import Link from "next/link";

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  tag?: string;
  date: string;
};

/**
 * PUBLIC_INTERFACE
 * PostCard renders a single post preview card.
 */
export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card h-full">
      <div className="card-inner space-y-3">
        <div className="flex items-center justify-between">
          <span className="badge">{post.tag || "General"}</span>
          <time className="text-xs text-gray-500" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
        </div>
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600">{post.excerpt}</p>
        <div>
          <Link href={`/posts/${post.id}`} className="text-sm text-[color:var(--color-brand)] hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
