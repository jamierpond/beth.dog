import Image from 'next/image'
import Pup from '../public/pup.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <Image src={Pup} alt="Pup" />
      </div>
    </main>
  )
}
