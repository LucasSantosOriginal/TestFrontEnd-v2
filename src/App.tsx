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
        <p>Utilize o CPF: 94436504352</p>
      </header>

      {/* Novo container para centralizar o search */}
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

      {showReport && (
        <div className="report-container">
          <Report cpf={searchCPF} />
        </div>
      )}
    </div>
  );
};

export default App;
