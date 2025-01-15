import { useState } from 'react';
import { siteayla_backend } from 'declarations/siteayla_backend';

function App() {
    const [greeting, setGreeting] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      const name = event.target.elements.name.value;
      site_backend.greet(name).then((greeting) => {
        setGreeting(greeting);
      });
      return false;
    }
  
    return (
      <>
        {/* Atualizações no <head> usando React Helmet */}
        
  
        {/* Estrutura principal */}
        <main className="bg-azul-3 flex justify-center items-center min-h-screen">
          <div className="bg-azul-1 shadow-lg border border-gray-300 rounded-lg p-7 max-w-7xl">
            {/* Cabeçalho */}
            <header className="flex justify-between items-center border-b pb-2 mb-5">
              <h1 className="text-azul-10 text-2xl font-bold">WELCOME TO MY PAGE !!☁️</h1>
            </header>
  
            {/* Navegação */}
            <nav className="mb-4 text-azul-5 text-sm space-x-4">
              <a href="/about/" className="hover:underline">
                about
              </a>
              <a href="/social/" className="hover:underline">
                social
              </a>
              <a href="/likes/" className="hover:underline">
                skills
              </a>
            </nav>
  
            {/* Corpo do card */}
            <div className="grid grid-cols-4 gap-6">
              {/* Bloco 1 */}
              <div className="bg-blue-50 p-3 rounded-md shadow-md">
                <img src="/div2.png" alt="div" className="w-[220px] h-6 rounded-md mb-2" />
                <h2 className="text-azul-7 text-sm font-bold">Ayla Micheluzzi</h2>
                <p className="text-xs text-gray-500">
                  She/Her
                  <br />
                  Brazilian (Curitiba- PR)
                  <br />
                  19 years
                </p>
                <h3 className="text-azul-4 text-xs font-bold mt-3">Student</h3>
                <img src="/fig22.webp" className="mt-2 h-12" />
              </div>
  
              {/* Bloco 2 */}
              <div className="col-span-2">
                <div className="bg-azul-2 p-3 rounded-md shadow-md mb-4">
                  <h3 className="text-azul-7 text-sm font-bold">Me</h3>
                  <p className="text-xs text-azul-5">
                    Dev | Software Developer | Information Systems student
                  </p>
                </div>
                <div className="bg-azul-2 p-3 rounded-md shadow-md">
                  <h3 className="text-azul-7 text-sm font-bold">Interests</h3>
                  <p className="text-xs text-azul-5">
                    Web3.0 | Blockchain | Dapp | Artificial Intelligence (AI)
                  </p>
                </div>
                <img src="div.png" className="w-[500px] h-10 mx-auto mt-6" />
              </div>
  
              {/* Bloco 3 */}
              <div className="p-3 rounded-md">
                <img src="fig99.webp" className="w-48 h-48 mx-auto" />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  
  export default App;
  