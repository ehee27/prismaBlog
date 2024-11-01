import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import Link from 'next/link'
import PlayerCard from './components/playerCard'

export default async function Playerspage() {
  const players = await prisma.player.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Players {players.length}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-white/10 py-5 leading-8">
        {players.map(player => (
          <li
            key={player.id}
            className="flex items-center justify-between px-5 gap-2"
          >
            <PlayerCard
              name={player.name}
              position={player.position}
              age={player.age}
              slug={player.slug}
            />
          </li>
        ))}
      </ul>

      <Link href="/" className="underline">
        <Button>Back to home</Button>
      </Link>
    </main>
  )
}
