// import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
// import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";
// import Experience from "@/components/Experience";

// export default function Home() {
//   return (

//     <main className="relative bg-black-100 flex justify-center items-center flex-col 
//     min-h-screen overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={[
//           { name: 'Home', link: '/', icon: <FaHome /> }
//         ]} />
//         <Hero />
//         <Grid />
//         <Experience />
//       </div>
//     </main>
//   );
// }
"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
// import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Grid />
     <RecentProjects/>
        <Experience />
       
      </div>
    </main>
  );
};

export default Home;