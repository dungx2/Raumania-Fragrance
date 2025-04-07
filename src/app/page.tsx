
import { Header } from "@/components/Header";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid/ProductGrid";
import TextAndImage from "@/components/home/TextAndImage/TextAndImage";

import { heroData, productsData, textAndImageSlices } from "./data/homeData";
import VideoBlock from "@/components/home/VideoBlock/videoblock";



export default function Home() {
  return (
    
    <>
     <Header/>
     <Hero
        heading={heroData.heading}
        body={heroData.body}
        buttonText={heroData.buttonText}
        buttonHref={heroData.buttonHref}
        color={heroData.color}
      />

      <ProductGrid
        heading="Our Perfumes"
        body="Browse our luxurious collection of signature scents."
        products={productsData}
      />

      {textAndImageSlices.map((slice, index) => (
        <TextAndImage key={index} {...slice} />
      ))}
    
    <VideoBlock youtubeID="VllN0yINA5A" />
    <ProductGrid
        heading="Our Perfumes"
        body="Browse our luxurious collection of signature scents."
        products={productsData}
      />
    
    </>
  );
}
