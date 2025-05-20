import Image from "next/image";


export default function ImageGallery() {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-2">Image Gallery</h2>
      <p className="text-gray-600 mb-8">
        Browse our handpicked selection of rental properties and find the perfect home for you!
      </p>

      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
        {/* Column 1 (Left) */}
        <div className="flex flex-col gap-4">
          <div className="h-[380px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i1.png"
              alt="Gallery 1"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="h-[380px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i5.png"
              alt="Gallery 5"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Column 2 (Middle) - Three smaller images */}
        <div className="flex flex-col gap-4">
          <div className="h-[230px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i3.png"
              alt="Gallery 2"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="h-[230px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i4.png"
              alt="Gallery 4"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="h-[380px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i6.png"
              alt="Gallery 6"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Column 3 (Right) */}
        <div className="flex flex-col gap-4">
          <div className="h-[380px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i2.png"
              alt="Gallery 3"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="h-[380px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <Image
              src="/landing-i7.png"
              alt="Gallery 7"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}