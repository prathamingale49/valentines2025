import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 gap-8">
      <div className="absolute inset-0 bg-[url('/pathtt.jpg')] bg-cover bg-center opacity-30" style={{ zIndex: -1 }}></div>
      <h1 className="text-6xl font-bold">Welcome to the Valentine’s Game</h1>
      <p className="text-3xl">Follow the journey and complete the challenges to win a mystery prize....</p>
      <Image src="/cars.png" alt="Blue Car" width={400} height={200} priority />
      <Link href="/elephant">
        <button className="start-button flex items-center justify-center gap-4 text-4xl p-8 w-full h-40">
          <Image src="/apllelle.png" alt="Apple" width={50} height={50} /> PLAY WITH ME
        </button>
      </Link>
    </div>
  );
}