import { useState, useEffect } from "react";
import "./report.css";

interface ReportProps {
  cpf: string; // Recebe o CPF como prop
}

const Report = ({ cpf }: ReportProps) => {
  const [personData, setPersonData] = useState<any>(null);

  useEffect(() => {
    // Carregar o JSON da pasta 'public' usando fetch
    const fetchData = async () => {
      try {
        const response = await fetch("/api-result.json");
        const data = await response.json();

        // Encontrar o registro com o CPF passado como prop
        const person = data.SNAP[0].pessoa.find(
          (entry: any) => entry.cpf === cpf
        );

        if (person) {
          setPersonData(person);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [cpf]); // O useEffect será chamado sempre que o CPF mudar

  return (
    <div>
      {personData ? (
        <div className="report-containner">
          <h1>Relatório de {personData["full name"]}</h1>
          <p>
            <strong>Nome completo:</strong> {personData["full name"]}
          </p>
          <p>
            <strong>CPF:</strong> {personData.cpf}
          </p>
          <p>
            <strong>Idade:</strong> {personData.idade}
          </p>
          <p>
            <strong>Profissão:</strong> {personData.profissao}
          </p>
          <p>
            <strong>Escolaridade:</strong> {personData.escolaridade}
          </p>
          <p>
            <strong>Nacionalidade:</strong> {personData.nacionalidade}
          </p>
          <p>
            <strong>Sexo:</strong> {personData.sexo}
          </p>
          <p>
            <strong>Data de nascimento:</strong> {personData["data nascimento"]}
          </p>
          <p>
            <strong>Cidade de nascimento:</strong>{" "}
            {personData["cidade_nascimento"]}
          </p>
          <p>
            <strong>Estado de nascimento:</strong>{" "}
            {personData["estado_nascimento"]}
          </p>
          <p>
            <strong>País de nascimento:</strong> {personData["pais_nascimento"]}
          </p>
          <p>
            <strong>Identidade:</strong> {personData.identidade}
          </p>
          <p>
            <strong>Título de eleitor:</strong>{" "}
            {personData["titulo de eleitor"]}
          </p>
          <p>
            <strong>Status Receita:</strong> {personData["status receita"]}
          </p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Report;
