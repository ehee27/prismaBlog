import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import Link from 'next/link'

export default async function PlayerDetails({ params }) {
  const player = await prisma.player.findUnique({
    where: {
      slug: params.slug,
    },
  })
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{player?.name}</h1>
      <p>{player?.position}</p>
      <Link href="/players" className="underline">
        <Button>Back to players</Button>
      </Link>
    </main>
  )
}
