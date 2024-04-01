import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export default function navbar() {
  return (
    //npm i bootstrap
    //npm i react-router-dom
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          📖 MyClassRoom
          </Link>
        <div className="btn-group"  >
            <Link to="/mes-eleves" className="btn btn-outline-light mr-2">
            Mes élèves
            </Link>
            <Link to="/bulletins" className="btn btn-outline-light mr-2">
            Bulletins
            </Link>
            <Link to="/mon-compte" className="btn btn-outline-light">
            Mon Compte
            </Link>
        </div>
          
        </div>
      </nav>
    </div>
  );
}

