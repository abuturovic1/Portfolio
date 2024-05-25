import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    // min-h-screen
    <main className="relative bg-black-100 flex justify-center items-center flex-col 
    min-h-screen overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]}  />
        <Hero />
        <Grid />
        <Experience />
      </div>
    </main>
  );
}
