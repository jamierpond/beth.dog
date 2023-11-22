import Image from 'next/image'
import Pup from '../public/pup_square.jpeg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <Image src={Pup} alt="Pup" className="object-cover w-64 h-64 rounded-full" />
      </div>
    </main>
  );
}
