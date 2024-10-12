import { useState } from "react";
import Report from "./components/Report"; // Verifique o caminho
import "./App.css";

const App = () => {
  const [searchCPF, setSearchCPF] = useState("");
  const [showReport, setShowReport] = useState(false);

  const handleSearch = () => {
    const validCPF = "94436504352";
    if (searchCPF === validCPF) {
      setShowReport(true);
    } else {
      alert("CPF não encontrado ou inválido!");
      setShowReport(false);
    }
  };

  const handleClear = () => {
    setSearchCPF("");
    setShowReport(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Relatório de Informações</h1>

        {/* Mover o search-container para dentro do header */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Digite o CPF para pesquisa"
            value={searchCPF}
            onChange={(e) => setSearchCPF(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Pesquisar
          </button>
          <button onClick={handleClear} className="clear-button">
            Limpar
          </button>
        </div>
      </header>

      {/* Mantenha o report visível enquanto a barra de pesquisa continua visível */}
      <div className="report-container">
        {showReport && <Report cpf={searchCPF} />}

        {/* A div cpf-utilize desaparece se showReport for verdadeiro */}
        {!showReport && (
          <div className="cpf-utilize">
            <h1>94436504352</h1>
            <p>
              Copie o CPF indicado acima e cole-o na barra de pesquisa.
              <br />
              Depois clique em 'Limpar' para limpar a página!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
