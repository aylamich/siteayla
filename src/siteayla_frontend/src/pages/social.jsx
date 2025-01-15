import { useState } from 'react';
import { siteayla_backend } from 'declarations/siteayla_backend';


function App() {
  
  return (
    <>
      
      {/* Estrutura principal */}
      <div className="bg-azul-3 flex justify-center items-center min-h-screen">
        {/* Container geral */}
        <div className="bg-azul-15 p-6 rounded-md shadow-md w-[620px] h-[595px]">
          {/* Flechinha voltar */}
         <div className="flex justify-start mt-4 mb-1">
              <a
                href="/"
                className="border-2 border-azul-5 text-azul-5 hover:bg-azul-6 hover:text-azul-1 font-bold py-1 px-2 rounded-full transition duration-300 text-center"
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
            </div>
          {/* Imagem do perfil */}
          <img
            src="gif2.gif"
            alt="Imagem do perfil"
            className="h-24 w-26 rounded-full mx-auto mt-4 mb-4"
          />
          <h2 className="text-azul-7 text-center text-2xl font-bold mb-4">Social</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center">
              <img src="div3.webp" alt="div" className="w-[200px] h-6 mb-2" />
            </div>

            {/* Links */}
            <a
              href="https://github.com/aylamich"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-azul-5 text-azul-14 py-2 px-4 rounded-full hover:bg-azul-6 hover:text-azul-1 transition"
            >
              <img
                src="github.jpg"
                alt="Github"
                className="h-10 w-10 rounded-full mr-2"
              />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ayla-m-1721b6301/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-azul-5 text-azul-14 py-2 px-4 rounded-full hover:bg-azul-6 hover:text-azul-1 transition"
            >
              <img
                src="linkedin.jpg"
                alt="Linkedin"
                className="h-10 w-10 rounded-full mr-2"
              />
              Linkedin
            </a>
            <a
              href="mailto:aylamick@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-azul-5 text-azul-14 py-2 px-4 rounded-full hover:bg-azul-6 hover:text-azul-1 transition"
            >
              <img
                src="email.jpg"
                alt="email"
                className="h-10 w-10 rounded-full mr-2"
              />
              Email
            </a>
            <a
              href="https://discord.com/users/[412260168043331584]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-azul-5 text-azul-14 py-2 px-4 rounded-full hover:bg-azul-6 hover:text-azul-1 transition"
            >
              <img src="d.jpg" alt="Discord" className="h-10 w-10 rounded-full mr-2" />
              Discord
            </a>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
