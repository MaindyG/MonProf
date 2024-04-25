import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AjoutEleve() {
    let navigate = useNavigate()
    const [eleves,setEleves]=useState({
        genre: "",
        nom:"",
        prenom:"",
        nom_figure_parentale:"",
        num_tel_parentale:""
    });
    const{genre,nom,prenom,nom_figure_parentale,num_tel_parentale}= eleves;
    const onInputChange=(e)=>{
        setEleves({...eleves,[e.target.name]:e.target.value})
    };
    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8181/neweleve",eleves)
        navigate("/meseleves") 
    };



  return (
    <div className='bg-dark text-light'>
        <div className='row'>
            <div className='col p-5 mt-2'>
                <h2 className='text-center m-4'><u>Enregistrement d'un élève</u></h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Genre <span className='text-danger'>*</span>
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Entrez le genre de leleve (M ou F)'
                    name='genre'
                    value= {genre}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Nom' className='form-label'>
                        Nom <span className='text-danger'>*</span>
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Entrez le nom de famille de leleve'
                    name='nom'
                    value= {nom}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>


                <div className='mb-3'>
                    <label htmlFor='Prenom' className='form-label'>
                        Prenom <span className='text-danger'>*</span>
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Entrez le/les prenoms de leleve'
                    name='prenom'
                    value= {prenom}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Nom_figure_parentale' className='form-label'>
                        Nom_figure_parentale <span className='text-danger'>*</span>
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Entrez le/les noms du père ou de la mère de leleve'
                    name='nom_figure_parentale'
                    value= {nom_figure_parentale}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                    
                </div>

                <div className='mb-3'>
                    <label htmlFor='Num_figure_parentale' className='form-label'>
                        Num Tel de figure parentale <span className='text-danger'>*</span>
                    </label>
                    <input
                    type={"number"}
                    className='form-control'
                    placeholder='Entrez le/les numero de telephone du père ou de la mère'
                    name='num_tel_parentale'
                    min="1" max="999999999"
                    maxLength={10}
                    value= {num_tel_parentale}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>
                <br></br>
                <button type="submit" className='btn btn-outline-primary'>Enregistrer</button>
                <Link className='btn btn-outline-danger mx-2' to="/meseleves">Annuler</Link>
                </form>
            </div>
        </div>

    </div>

  )
}
