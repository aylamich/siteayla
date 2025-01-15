import { useState } from 'react';
import { siteayla_backend } from 'declarations/siteayla_backend';

function App() {
  
  return  (
    <>

      {/* Estrutura principal */}
      <div className="bg-azul-3 flex justify-center items-center min-h-screen">
        {/* Container principal */}
        <div className="pt-2 bg-azul-1 shadow-lg border border-gray-300 rounded-lg p-7 max-w-4xl h-[360px]">
          {/* Cabeçalho */}
          <header className="bg-blue-3 flex justify-between items-center pb-2 mb-5">
            <div className="flex justify-center items-center mt-2 space-x-4">
              {/* Link de Voltar */}
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

              {/* Título */}
              <h1 className="bg-azul-1 border-4 border-azul-3 py-2 px-3 rounded-full text-azul-4 text-1xl font-bold">
                about.me
              </h1>

              {/* Imagens */}
              <img src="div8.png" alt="div" className="w-[320px] h-6 rounded-md" />
              <img src="div8.png" alt="div" className="w-[320px] h-6 rounded-md" />
              <img src="div8.png" alt="div" className="w-[320px] h-6 rounded-md" />
            </div>
          </header>

          {/* Corpo do Card */}
          <div className="grid grid-cols-4 gap-5">
            {/* Bloco 1 */}
            <div className="p-2">
              <img src="fig44.png" className="mt-3 w-48 h-48 mx-auto" alt="Figura" />
            </div>

            {/* Bloco 2 */}
            <div className="bg-azul-2 p-3 rounded-md shadow-md col-span-2">
              <p className="text-xs text-gray-500">
                I'm an Information Systems undergraduate at PUCPR, but my journey in tech began long before
                university. I specialize in backend development and taught myself Python as my first programming
                language. My areas of interest include Web3.0, Blockchain, Dapp, Artificial Intelligence and
                Games. <br />
                I have intermediate English skills. I'm constantly working to expand my knowledge in these fields.
                I love studying, helping my peers with their questions, and learning more in the process. My
                hobbies include gaming, philosophy, and discovering new coffee shops. I'm a calm and sociable
                person who values teamwork and synergy. Every day, I push myself to grow, staying committed to
                learning and driven by my passion for technology.
              </p>
            </div>

            {/* Bloco 3 */}
            <div className="p-3 rounded-md">
              <img src="gif1.gif" className="mt-4 w-48 h-46 mx-auto" alt="Animação" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;