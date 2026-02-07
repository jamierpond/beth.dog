
import Image from 'next/image'
import Pup from '../public/pup.jpg'

export default function Home() {
  return (
    // Full height of the viewport and flex container to center content
    <main className="flex h-screen items-center justify-center relative">
      <div>
        {/* Image component from Next.js */}
        <Image src={Pup} alt="Pup" className="object-cover object-center w-max" />
      </div>
      <a
        href="https://pond.audio"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
      >
        Created by Jamie Pond
      </a>
    </main>
  );
}

