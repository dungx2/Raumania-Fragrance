import { ButtonLink } from "@/components/ButtonLink";
import { Header } from "@/components/Header";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid/ProductGrid";
import TextAndImage from "@/components/home/TextAndImage/TextAndImage";
import Image from 'next/image';



export default function Home() {
  return (
    
    <>
     <Header/>
     <Hero
      heading="Elevate Your Senses with Timeless Scents"
      body="At Raumania Fragrance, we craft luxurious scents that capture emotions, memories, and moments. Each fragrance is designed to elevate your senses, blending the finest ingredients to create timeless aromas."
      buttonText="Custom Your Perfumes"
      buttonHref="/explore"
      color="yellow"
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
    <TextAndImage
        index={1}
        theme="be"
        heading="I want to be part of what’s coming next"
        body="At Raumania, our sustainability efforts are rooted in the belief that we must focus where we can make the most meaningful difference. We are committed to restoring nature, protecting the climate, investing in circularity, and championing dignity and opportunity for all—especially by advancing women’s autonomy.
In the face of today’s urgent challenges and those ahead, our goal is to be part of what endures: a future where people, nature, and business thrive together."
        buttonText="Shop Now"
        buttonHref="/products"
        variation="imageOnLeft"
        foregroundImage="/images/guy-1.png"
        backgroundImage="/images/paint-background.png"
        
    />
    <TextAndImage
        index={2}
        theme="milk"
        heading="I want to be part of what’s coming next"
        body="At Raumania, our sustainability efforts are rooted in the belief that we must focus where we can make the most meaningful difference. We are committed to restoring nature, protecting the climate, investing in circularity, and championing dignity and opportunity for all—especially by advancing women’s autonomy.
In the face of today’s urgent challenges and those ahead, our goal is to be part of what endures: a future where people, nature, and business thrive together."
        buttonText="Shop Now"
        buttonHref="/products"
        variation="default"
        foregroundImage="/images/guy-1.png"
        backgroundImage="/images/paint-background.png"
        
    />
    <TextAndImage
        index={3}
        theme="be"
        heading="Empowering Women’s Autonomy"
        body="Raumania was founded by Nhungnguoiae36, a visionary who redefined women’s fashion and took control of her own destiny.
Women have always been at the heart of everything we do. Ensuring that women have an equal voice and the freedom to safely choose their own path is a timeless part of our legacy. Today, we continue to support women—both within and beyond our House—in their pursuit of autonomy, with the aim of amplifying the impact of gender equality around the world.
"
        buttonText="Shop Now"
        buttonHref="/products"
        variation="imageOnLeft"
        foregroundImage="/images/guy-1.png"
        backgroundImage="/images/paint-background.png"
        
    />
    
    
    </>
  );
}
