import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Home from './pages/home.js'
import Compte from './pages/Compte.js';
import Meseleves from './pages/Meseleves.js';
import AjoutEleve from './fonctions/AjoutEleve.js';
import ModifierEleve from './fonctions/ModifierEleve.js';

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/prof/1" element={<Compte />} />
            <Route exact path="/meseleves" element={<Meseleves />} />
            <Route exact path="/neweleve" element={<AjoutEleve/>}/>
            <Route exact path="/eleve/:id" element={<ModifierEleve />} />
        </Routes>
        <Footer />
     </Router>    
     </div>
  );
}
//npm install -g npm
//npx create-react-app fe
//npm i bootstrap
//npm i react-router-dom
//npm react-icons
//npm install --save @fortawesome/fontawesome-free
//npm i axios
//npm install cors

export default App;
