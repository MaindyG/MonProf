import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='vh-100 container-fluid d-flex flex-column justify-content-center align-items-center bg-dark' >
    <div className='bg-dark p-5 '>
    <h1 className='text-light '>Bienvenue Prof ! ヽ(•‿•)ノ</h1>
    <h2 className='text-light'>=========== O ===========</h2>
    <div class="row mt-4">
  <div class="col-sm-6">
    <div class="card  text-dark">
      <div class="card-body ">
        <h5 class="card-title"><u><b>Liste d'élèves</b></u></h5><br></br>
        <p class="card-text">Ajouter ou Supprimer vos élèves. <br></br>Vous pourrez aussi modifier les informations de vos élèves    </p>
        <br></br><Link class="btn btn-primary" to="/meseleves">Mes élèves</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-dark">
      <div class="card-body">
        <h5 class="card-title"><u><b>Notes</b></u></h5><br></br>
        <p class="card-text">Entrez les notes de vos élèves et suivez la progression de leur parcours scolaire <br></br> </p>
        <br></br>
        <Link class="btn btn-primary" to="/bulletin">Bulletins</Link>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}
