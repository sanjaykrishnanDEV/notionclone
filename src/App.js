import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Minicards from "./components/Minicards";
import Hero from "./components/Hero";
import EndClicker from "./components/EndClicker";
import { TbTopologyStarRing } from "react-icons/tb";
import { IoDocument } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { SiPowerpages } from "react-icons/si";
import Cutdrawing from "./components/Cutdrawing";

function App() {
  return (
    <div className="App overflow-hidden h-auto">
      <Navbar />
      <Header />
      <div className="h-fit w-screen flex flex-wrap justify-center p-5">
        <Minicards
          image={<TbTopologyStarRing color="purple" className="h-20" />}
          title="AI"
          content="Ask literally anything.Notion will answer."
        />
        <Minicards
          image={<IoDocument color="red" className="h-10" />}
          title="Wikis"
          content="Centralize your knowledge.No more hunting for answers"
        />
        <Minicards
          image={<TbTargetArrow color="blue" className="h-10" />}
          title="Projects"
          content="Manage complex projects without the chaos."
        />
        <Minicards
          image={<SiPowerpages color="orange" className="h-10" />}
          title="Docs"
          content="simple powerful beautiful.Next-gen notes and docs."
        />
      </div>
      <Hero/>
      <Cutdrawing/>
      <EndClicker/>
    </div>
  );
}

export default App;
