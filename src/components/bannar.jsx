import Image from "next/image"; // Make sure you have this image in the public folder

export default function Bannar() {
  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      <div className="relative h-full w-full overflow-hidden">
        {/* Image section */}
        <Image
          src="/full.jpg"
          alt="Camera"
          width={600}
          height={600}
          className="w-full h-full  rounded-2xl p-3"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Built for the real world.
          </h1>
        </div>
      </div>
    </div>
  );
}
