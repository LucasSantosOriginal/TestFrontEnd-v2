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
          {/* <h1>Relatório de {personData["full name"]}</h1> */}
          <p>
            <strong>NOME COMPLETO:</strong> {personData["full name"]}
          </p>
          <p>
            <strong>CPF:</strong> {personData.cpf}
          </p>
          <p>
            <strong>IDADE:</strong> {personData.idade}
          </p>
          <p>
            <strong>PROFISSÃO:</strong> {personData.profissao}
          </p>
          <p>
            <strong>ESCOLARIDADE:</strong> {personData.escolaridade}
          </p>
          <p>
            <strong>NACIONALIDADE:</strong> {personData.nacionalidade}
          </p>
          <p>
            <strong>SEXO:</strong> {personData.sexo}
          </p>
          <p>
            <strong>DATA DE NASCIMENTO:</strong> {personData["data nascimento"]}
          </p>
          <p>
            <strong>CIDADE DE NASCIMENTO:</strong>{" "}
            {personData["cidade_nascimento"]}
          </p>
          <p>
            <strong>ESTADO DE NASCIMENTO:</strong>{" "}
            {personData["estado_nascimento"]}
          </p>
          <p>
            <strong>PAÍS DE NASCIMENTO:</strong> {personData["pais_nascimento"]}
          </p>
          <p>
            <strong>IDENTIDADE:</strong> {personData.identidade}
          </p>
          <p>
            <strong>TÍTULO DE ELEITOR:</strong>{" "}
            {personData["titulo de eleitor"]}
          </p>
          <p>
            <strong>STATUS RECEITA:</strong> {personData["status receita"]}
          </p>
        </div>
      ) : (
        <p>CARREGANDO DADOS...</p>
      )}
    </div>
  );
};

export default Report;
