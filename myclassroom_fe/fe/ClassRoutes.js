import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Home from './pages/home.js'
import Compte from './pages/Compte.js';
import Meseleves from './pages/Meseleves.js';
import AjoutEleve from './fonctions/AjoutEleve.js';
import ModifierEleve from './fonctions/ModifierEleve.js';
import ModifierNotes from './fonctions/ModifierNotes.js';

import Bulletin from './pages/Bulletin.js';

function ClassRoutes() {
  return (
    <Router>
    <Navbar />
    
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/prof/1" element={<Compte />} />
        <Route exact path="/meseleves" element={<Meseleves />} />
        <Route exact path="/neweleve" element={<AjoutEleve/>}/>
        <Route path="/eleve/:student_id" element={<ModifierEleve />} />
        <Route exact path="/bulletin" element={<Bulletin />} />
        <Route exact path="/eleve/:student_id/:student_id" element={<ModifierNotes />} />


    </Routes>
    <Footer />
 </Router>  
  )
}

export default ClassRoutes