import { useState } from 'react';
import { siteayla_backend } from 'declarations/siteayla_backend';

function App() {
 
  return  (
   <>      
      {/* Container principal */}
      <div className="bg-azul-3 flex justify-center items-center min-h-screen">
      <div className="bg-azul-1 shadow-lg border border-gray-300 rounded-lg p-7 w-[600px] h-auto">
        {/* Cabeçalho */}
        <header className="mt-1 mb-6 flex flex-col items-center">
          <div className="flex justify-center items-center mt-2 l space-x-4">
            <a
              href="/"
              className="flex justify-center items-center border-2 border-azul-3 text-azul-4 hover:bg-azul-6 hover:text-azul-1 font-bold py-1 px-2 rounded-full transition duration-300 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
              </svg>
            </a>
            <h1 className="text-azul-10 text-2xl font-bold py-2 px-3">SKILLS !!</h1>
            <img src="fig.webp" alt="div" className="w-[20px] h-6 rounded-md" />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <img src="divcoelhos.png" className="w-66 h-8" />
          </div>
        </header>

        {/* Corpo do carrd */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            {/* Bloco 1 */}
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
          </div>

          {/* Bloco 2 */}
          <div className="col-span-1">
            <a href="https://www.java.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
          </div>

          {/* Bloco 3 */}
          <div className="col-span-1">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
            <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="node.js"
                className="w-16 h-16 mx-auto"
              />
            </a>
            <br />
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="tailwindcss"
                className="w-12 h-12 mx-auto"
              />
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default App;
