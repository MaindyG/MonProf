import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';



export default function footer() {
  return (
<footer class="text-center bg-dark shadow-lg border-secondary">
    <div className='text-light'>
    © Maindy Goue - Projet Application Web Full Stack © 
    </div>
  <div class="text-center p-3 text-light">
   <Link className="btn-outline-light btn-lg" to={"https://github.com/MaindyG/MyClassroom"}> <FaGithub size={40}/> </Link> 
  </div>
</footer>)
}
