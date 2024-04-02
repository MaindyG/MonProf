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

  const deleteEleves = async (id) => {
    await axios.delete(`http://localhost:8181/eleve/${student_id}`);
    loadEleves();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Code ID #</th>
              <th scope="col">Genre 👋🏾 </th>
              <th scope="col">Nom 👨🏾‍💻</th>
              <th scope="col">Prenom 👩🏾‍🔬</th>
              <th scope="col">Figure Parentale 👪</th>
              <th scope="col">Numero de telephone Figure Parentale ☎️</th>
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
                    className="btn btn-primary mx-2"
                    to={`/vieweleve/${eleves.student_id}`}
                  >
                    View
                  </Link>
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
      </div>
    </div>
  );
}