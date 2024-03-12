import Contact from "@/components/contact/Contact";
import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Introduce from "@/components/introduce";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main className="">
     <Header/>
     <Introduce/>
     <Experiences/>
     <Projects/>
     <Contact/>
    </main>
  );
}
