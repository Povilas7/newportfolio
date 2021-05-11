import logo from './logo.svg';
import './App.css';
import Start from "./components/start";
import Toolbar from "./components/toolbar";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Project from "./components/project";
import Contacts from "./components/contacts";

function App() {
  return (
      <div>
        <div>
          <Toolbar/>
        </div>
        <div>
          <Start/>
        </div>
        <div>
          <AboutMe/>
        </div>
        <div>
          <Skills/>
        </div>
        <div>
          <Project/>
        </div>
        <div>
          <Contacts/>
        </div>
      </div>
  );
}

export default App;