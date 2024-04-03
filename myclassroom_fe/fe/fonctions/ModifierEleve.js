import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ModifierEleve() {
    let navigate = useNavigate();

    const { id } = useParams();
 
    const [eleves, setEleves] = useState({
      genre:"",
      nom: "",
      prenom: "",
      nom_figure_parentale: "",
      num_tel_parentale:""
    });
  
    const { genre, nom, prenom, nom_figure_parentale, num_tel_parentale } = eleves;
  
    const onInputChange = (e) => {
      setEleves({ ...eleves, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
        loadEleves();
    },[]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8181/eleve/${id}`, eleves);
      navigate("/meseleves");
    };

    const loadEleves = async () => {
      const result = await axios.get(`http://localhost:8181/eleve/${id}`);
      setEleves(result.data);      
    };
  
    return (
     
      <div className="vh-100  p-4 ">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 ">
            <h2 className="text-center m-4"><u>Modifier les informations</u></h2>
  
            <form onSubmit={(e) => onSubmit(e)}>


            <div className="mb-3">
                <label htmlFor="Genre" className="form-label">
                  Genre
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez le genre (H ou F)"
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
                  placeholder="Entrez le nom"
                  name="nom"
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
                  placeholder="Entrez le prénom"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nom_figure_parentale" className="form-label">
                  Parent
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Entrez votre addesse e-mail"
                  name="nom_figure_parentale"
                  value={nom_figure_parentale}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Classe_Primaire" className="form-label">
                 Tel. Parent
                </label>
                <input
                  type={Number}
                  className="form-control"
                  placeholder="Entrez votre classe primaire"
                  name="num_tel_parentale"
                  value={num_tel_parentale}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary mt-4">
                Soumettre vos modifications
              </button>
              <Link className="btn btn-outline-danger mx-2 mt-4" to="/meseleves">
                Annuler vos modifications
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }