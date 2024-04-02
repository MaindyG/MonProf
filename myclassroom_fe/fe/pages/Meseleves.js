import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Meseleves() {

  const [eleves, setEleves] = useState([]);

  const { student_id } = useParams();

  useEffect(() => {
    loadEleves();
  },[]);

  const loadEleves = async () => {
    const result = await axios.get("http://localhost:8181/meseleves");
    setEleves(result.data);
  };

  const deleteEleves = async (student_id) => {
    await axios.delete(`http://localhost:8181/eleve/${student_id}`);
    loadEleves();
  };

  return (
    <div className='vh-100 container-fluid d-flex flex-column justify-content-center align-items-center bg-dark text-light' >

    <div className="container ">
      <div className="py-4 ">
        <h1 className="mb-5 "><u>Liste d'élèves</u> </h1>
        <table className="table ">
          <thead>
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
                    to={`/editeleve/${eleves.student_id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEleves(eleves.student_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-primary mx-2" to="/neweleve"> Ajouter un nouvel élève</Link>
      </div>
      </div>
      </div>
  );
}