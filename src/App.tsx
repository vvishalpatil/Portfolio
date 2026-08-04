import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Recognition } from "./components/Recognition";
import { StackStrip } from "./components/StackStrip";
// Writing is built but has no posts yet — an empty "coming soon" section reads
// as unfinished on a hiring page. Re-enable once there is a first article.
// import { Writing } from "./components/Writing";

function App() {
  return (
    <div className="bg-bg text-text">
      <Hero />
      <div className="mx-auto max-w-[680px] px-6 pb-24">
        <main>
          <About />
          <Projects />
          <Experience />
          <Recognition />
          {/* <Writing /> */}
          <StackStrip />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
