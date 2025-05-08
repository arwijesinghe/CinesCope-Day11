import Image from "next/image";
import HeaderNav from "@/components/HeaderNav";
import HeroBanner from "@/components/home/hero-banner";
import FeaturedMovies from "@/components/home/featured-movies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <footer className=" flex  bg-amber-300 h-20">Our Footer</footer>
    </div>
  );
}
