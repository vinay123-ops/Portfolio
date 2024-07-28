import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppNavbar} from "./Components/NavBar"
import { Banner } from "./Components/Banner"
import { Skills } from "./Components/Skills"
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;