import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ModifierNotes() {
    let navigate = useNavigate();

    const { student_id } = useParams();
    const { bulletin_id} = useParams();
 
    const [eleves, setEleves] = useState({
      bulletin : {
        moyenneFrancais:"",
        moyenneMath: "",
        moyenneEP: "",
        commentaire:""
}});
  
    const { moyenneFrancais, moyenneMath,  moyenneEP, commentaire } = eleves;
  
    const onInputChange = (e) => {
      setEleves({ ...eleves, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
        loadEleves();
    },[]);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8181/eleve/${student_id}/${student_id}`, eleves);
      navigate("/bulletin");
    };

    const loadEleves = async () => {
      const result = await axios.get(`http://localhost:8181/noteeleve/${student_id}`);
      setEleves(result.data);      
    };
  
  
    return (
     
      <div className="vh-100  p-4 ">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 ">
            <h2 className="text-center m-4"><u>Modifier les moyennes</u></h2>
  
            <form onSubmit={(e) => onSubmit(e)}>


            <div className="mb-3">
                <label htmlFor="moyenneFrancais" className="form-label">
                  Francais
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder=""
                  name="moyenneFrancais"
                  value={moyenneFrancais}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="moyenneMath" className="form-label">
                  Math
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder=""
                  name="moyenneMath"
                  value={moyenneMath}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

             
              <div className="mb-3">
                <label htmlFor="moyenneEP" className="form-label">
                  Education Physique
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder=""
                  name="moyenneEP"
                  value={moyenneEP}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="commentaire" className="form-label">
                 Commentaire
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder=""
                  name="commentaire"
                  value={commentaire}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary mt-4">
                Soumettre vos modifications
              </button>
              <Link className="btn btn-outline-danger mx-2 mt-4" to="/bulletin">
                Annuler vos modifications
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }