
import Image from 'next/image'
import Pup from '../public/pup_square.jpeg'

export default function Home() {
  return (
    // Full height of the viewport and flex container to center content
    <main className="flex h-screen items-center justify-center">
      <div>
        {/* Image component from Next.js */}
        <Image src={Pup} alt="Pup" className="object-cover object-center w-max" />
      </div>
    </main>
  );
}

