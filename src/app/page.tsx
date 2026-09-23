import Hero from "@/components/hero/Hero";
import LibrarySection from "@/components/library /LibrarySection";


export default function Home() {
  return (
   <>
   <header>
    <Hero></Hero>
    <div className="w-10 h-1.5  rounded-2xl hover:scale-x-200 transition-all duration-300  bg-[#C2F800] mx-auto"></div>
   </header>
   <main>
    <LibrarySection></LibrarySection>
   </main>
   </>
  );
}
