import { ButtonLink } from "@/components/ButtonLink";
import { Header } from "@/components/Header";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/ProductGrid/ProductGrid";



export default function Home() {
  return (
    <>
     <Header/>
     <Hero
      heading="Elevate Your Senses with Timeless Scents"
      body="At Raumania Fragrance, we craft luxurious scents that capture emotions, memories, and moments. Each fragrance is designed to elevate your senses, blending the finest ingredients to create timeless aromas."
      buttonText="Custom Your Perfumes"
      buttonHref="/explore"
    />
     <ProductGrid
      heading="Our Perfumes"
      body="Browse our luxurious collection of signature scents."
      products={[
        {
          id: "perfumes-1",
          name: "Velvet Bloom",
          imageUrl: "/images/fragrance/VelvetBloom.png",
          price: 50000000,
          customizeUrl: "/customize/street-rocket",
        },
        {
          id: "perfumes-1",
          name: "Velvet Bloom",
          imageUrl: "/images/fragrance/VelvetBloom.png",
          price: 50000000,
          customizeUrl: "/customize/street-rocket",
        },
        {
          id: "perfumes-1",
          name: "Velvet Bloom",
          imageUrl: "/images/fragrance/VelvetBloom.png",
          price: 50000000,
          customizeUrl: "/customize/street-rocket",
        },
        {
          id: "perfumes-1",
          name: "Velvet Bloom",
          imageUrl: "/images/fragrance/VelvetBloom.png",
          price: 50000000,
          customizeUrl: "/customize/street-rocket",
        },
        
      ]}
    />
    </>
  );
}
