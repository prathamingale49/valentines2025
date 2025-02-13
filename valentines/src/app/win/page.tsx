import Image from "next/image";

export default function Win() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 gap-8">
      <div className="absolute inset-0 bg-[url('/raspberriesback.jpg')] bg-cover bg-center opacity-30" style={{ zIndex: -1 }}></div>
      <h1 className="text-6xl font-bold">YAYAYAYYAYAYAYAYYAYAYYAYAY</h1>
      <p className="text-6xl">CONGRATS YOU WIN AND I GET VALENTINE</p>
      <Image src="/heartttee.png" alt="Blue Car" width={400} height={200} priority />
    </div>
  );
}