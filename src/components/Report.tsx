import { useState, useEffect } from "react";
import "./report.css";

interface ReportProps {
  cpf: string;
}

const Report = ({ cpf }: ReportProps) => {
  const [personData, setPersonData] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Para controlar o carregamento

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia o carregamento
      try {
        const response = await fetch("/api-result.json");
        const data = await response.json();

        const person = data.SNAP[0].pessoa.find(
          (entry: any) => entry.cpf === cpf
        );

        if (person) {
          setPersonData(person);
        } else {
          alert("Nenhum dado encontrado para este CPF!"); // Mensagem de erro se não encontrado
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, [cpf]);

  return (
    <div>
      {loading ? (
        <p>CARREGANDO DADOS...</p>
      ) : personData ? (
        <div className="report-containner">
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
        <p>Nenhum dado encontrado para este CPF!</p>
      )}
    </div>
  );
};

export default Report;
