import About from "@/components/About/About";
import ConatctPage from "@/components/Contact/ConatctPage";
import HomePage from "@/components/Home/Home";
import ProjectShow from "@/components/Projects/ProjectShow";

export default function Home() {
  return (
    <div className="min-w-screen">
      <div className="contentContainner">
        <div className="w-full" id="Home">
          <HomePage />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Projects" >
          <ProjectShow />
        </div>
        <div id="Contact">
          <ConatctPage />
        </div>
      </div>
    </div>

  );
}
