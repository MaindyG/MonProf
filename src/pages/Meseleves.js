import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { PORT } from './Constantes.js';
export default function Meseleves() {

  const [eleves, setEleves] = useState([]);

  const { student_id } = useParams();

  useEffect(() => {
    loadEleves();
  },[]);

  const loadEleves = async () => {
    const result = await axios.get(`http://localhost:${PORT}/meseleves`);
    setEleves(result.data);
  };

  const deleteEleves = async (student_id) => {
    await axios.delete(`http://localhost:${PORT}/eleve/${student_id}`);
    loadEleves();
  };

  return (
    <div className=' container-fluid d-flex flex-column ' >

    <div className="container ">
      
      <div className="py-4 ">
        <h1 className="mb-5 "><u>Liste d'élèves</u> </h1>
        
        <table className="table border table-responsive ">
          <thead class="thead-dark">
            <tr className="">
              <th scope="col">Code ID #</th>
              <th scope="col">Genre 👋🏾 </th>
              <th scope="col">Nom 👨🏾‍💻</th>
              <th scope="col">Prenom 👩🏾‍🔬</th>
              <th scope="col">Figure Parentale 👪</th>
              <th scope="col">Tel Figure Parentale ☎️</th>
              <th scope="col">Action ✍🏾</th>
            </tr>
          </thead>
          <tbody>
            {eleves.map((eleves, index) => (
              <tr>
                <th scope="row" key={index}>
                  {eleves.student_id}
                </th>
                <td>{eleves.genre}</td>
                <td>{eleves.nom}</td>
                <td>{eleves.prenom}</td>
                <td>{eleves.nom_figure_parentale}</td>
                <td>{eleves.num_tel_parentale}</td>
                

                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/eleve/${eleves.student_id}`}
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEleves(eleves.student_id)}
                  >
                    Supprimer 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-primary mx-2 mt-4 " to="/neweleve"> Ajouter un nouvel élève</Link>
      </div>
      <figure className="p-4">
  <blockquote class="blockquote">
    <p>“Education is our passport to the future, for tomorrow belongs only to the people who prepare for it today.” </p>
  </blockquote>
  <figcaption class="blockquote-footer">
     <cite title="Source Title">Malcom X</cite>
  </figcaption>
</figure>
      </div>
      </div>
  );
}