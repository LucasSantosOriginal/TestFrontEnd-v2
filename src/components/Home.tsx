import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Código a ser executado após a renderização
    console.log("Componente Home foi renderizado");
  }, []); // Adicione as dependências se necessário

  return (
    <div>
      <h1>Bem-vindo ao Home!</h1>
    </div>
  );
};

export default Home;
