import { createPost } from '@/actions/actions'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import Link from 'next/link'

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    // where: {
    //   title: {
    //     contains: 'Post',
    //   },
    // },
    orderBy: {
      createdAt: 'desc',
    },
  })
  const postsCount = await prisma.post.count()
  //

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts {postsCount}</h1>
      <ul className="border-t border-b border-white/10 py-5 leading-8">
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* ------------------ FORM ----------------------- */}
      <div className="border-4 border-white/10 rounded-lg w-[35%]">
        <form action={createPost} className="flex flex-col gap-4 p-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="bg-white text-black py-1 px-2 rounded-md"
          />
          <textarea
            name="content"
            rows={3}
            placeholder="Content"
            className="bg-white text-black py-1 px-2 rounded-md"
          />
          <Button>Create Post</Button>
        </form>
      </div>
      <Link href="/" className="underline">
        <Button>Back to home</Button>
      </Link>
    </main>
  )
}
