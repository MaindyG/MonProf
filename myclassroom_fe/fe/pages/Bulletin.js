import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Bulletins() {

  const [eleves, setEleves] = useState([]);

  const { student_id } = useParams();
  const { bulletin_id } = useParams();

  useEffect(() => {
    loadEleves();
  },[]);

  const loadEleves = async () => {
    const result = await axios.get("http://localhost:8181/meseleves");
    setEleves(result.data);
  };


  return (
    <div className='vh-100 container-fluid d-flex flex-column ' >

    <div className="container ">
      <div className="py-4 ">
        <h1 className="mb-5 "><u>Notes d'élèves</u> </h1>
        <table className="table border ">
          <thead class="thead-dark">
            <tr className="">
              <th scope="col">Code ID #</th>
              <th scope="col">Nom 👨🏾‍💻</th>
              <th scope="col">Prenom 👩🏾‍🔬</th>
              <th scope="col">Francais 🥖</th>
              <th scope="col">Math 👾</th>
              <th scope="col">Histoire 📜</th>
              <th scope="col">EducPhysique ⚽</th>
              <th scope="col">Commentaire 🍏</th>
              <th scope="col">Action ✍🏾</th>
            </tr>
          </thead>
          <tbody>
            {eleves.map((eleves, index) => (
              <tr>
                <th scope="row" key={index}>
                  {eleves.student_id}
                </th>
                <td>{eleves.nom}</td>
                <td>{eleves.prenom}</td>
                <td>{eleves.bulletin.moyenneFrancais}</td>
                <td>{eleves.bulletin.moyenneMath}</td>
                <td>{eleves.bulletin.moyenneHistoire}</td>
                <td>{eleves.bulletin.moyenneEP}</td>
                <td>{eleves.bulletin.commentaire}</td>

                <td>
                  <Link
                    className="btn btn-outline-dark mx-2"
                    to={`/eleve/${eleves.student_id}/${eleves.student_id}`}
                  >
                    Modifier
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
  );
}