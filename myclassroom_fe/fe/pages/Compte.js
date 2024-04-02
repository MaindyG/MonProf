import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Compte() {
    let navigate = useNavigate();

    const { prof_id } = useParams();
   

  
    const [prof, setProf] = useState({
      genre:"",
      nom: "",
      prenom: "",
      email: "",
      classePrimaire:""
    });
  
    const { genre, nom, prenom, email, classePrimaire } = prof;
  
    const onInputChange = (e) => {
      setProf({ ...prof, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
      loadProf();
    });
  
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8181/prof/${prof_id}`, prof);
      navigate("/");
    };

    const loadProf = async () => {
      const result = await axios.get('http://localhost:8181/lesprofs');
        setProf(result.data[0]);      
    };
  
    
  
    return (
      <div className="bg-dark text-light">
      <div className="container p-4 ">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Modifier vos informations</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>


            <div className="mb-3">
                <label htmlFor="Genre" className="form-label">
                  Genre
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez votre genre (H ou F)"
                  name="genre"
                  value={genre}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Nom" className="form-label">
                  Nom
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez votre nom"
                  name="name"
                  value={nom}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Prenom" className="form-label">
                  Prenom
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez votre prénom"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez votre addesse e-mail"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Classe_Primaire" className="form-label">
                  Niveau/Classe Primaire
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez votre classe primaire"
                  name="classePrimaire"
                  value={classePrimaire}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary mt-4">
                Soummettre vos modifications
              </button>
              <Link className="btn btn-outline-danger mx-2 mt-4" to="/">
                Annuler vos modifications
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }