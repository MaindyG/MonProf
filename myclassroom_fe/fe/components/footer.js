import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="fixed-bottom text-center bg-dark shadow-lg border-secondary">
      <div className="text-light p-3">
        © Maindy Goue - Projet Application Web Full Stack ©
      </div>
      <div className="text-center p-3 text-light">
        <a
          className="btn-outline-light btn-lg"
          href="https://github.com/MaindyG/MyClassroom"
        >
          <FaGithub size={40} />
        </a>
      </div>
    </footer>
  );
}

