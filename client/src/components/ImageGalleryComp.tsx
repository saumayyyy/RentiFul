import ImageGallery from "@/components/image-gallery"

export default function ImageGalleryComp() {
  // Image URLs provided by the user
  const imageUrls = [
    "/landing-i1.jpg",
    "/landing-i2.jpg",
    "/landing-i3.jpg",
    "/landing-i4.jpg",
    "/landing-i5.jpg",
    "/landing-i6.jpg",
    "/landing-i7.jpg",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center mx-auto w-full">
      <ImageGallery/>
    </main>
  )
}
