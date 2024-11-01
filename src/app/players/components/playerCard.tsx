import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function PlayerCard({
  name,
  position,
  age,
  slug,
}: {
  name: string
  slug: string
  position: string
  age: number
}) {
  return (
    <Card className="w-[100%] mb-3 shadow-md">
      <CardHeader>
        <CardTitle>
          <Link href={`/players/${slug}`}>{name}</Link>
        </CardTitle>
        <CardDescription>{position}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{age}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}
