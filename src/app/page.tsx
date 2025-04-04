import { ButtonLink } from "@/components/ButtonLink";
import { Header } from "@/components/Header";
import Hero from "@/components/home/Hero";



export default function Home() {
  return (
    <>
     <Header/>
     <Hero
      heading="Welcome to School Social Platform"
      body="Connect with classmates, join groups, and stay updated on events!"
      buttonText="Explore Now"
      buttonHref="/explore"
    />
    </>
  );
}
