import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Homepage() {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">Welcome to my blog</h1>
      <ModeToggle />

      <Link href="/posts" className="underline">
        <Button> View posts</Button>
      </Link>

      <Link href="/players" className="underline">
        <Button> View players</Button>
      </Link>
    </main>
  )
}
