import { useState, useEffect } from "react";
import Frase from "./components/Frase";

import styled from "@emotion/styled";

const colorWhite = "#ffffff";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  opacity: 0.8;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${colorWhite};
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid ${colorWhite};
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateY(-3px);
    box-shadow: 10px 20px 10px rgb(0 0 0 / 20%);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// api endpoint : https://breakingbadapi.com/api/quote/random

function App() {
  const [frase, setFrase] = useState({});

  async function consultarAPI() {
    try {
      // prettier-ignore
      const resultado = await fetch("https://breakingbadapi.com/api/quote/random");
      const data = await resultado.json(); // here we retrive the data
      const [objFrase] = data;
      setFrase(objFrase);
    } catch (error) {
      alert(`No se puedieron extraer los datos`);
    }
  }

  // useEffect para mostrar por primera vez una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      {/* prettier-ignore */}
      <Frase
        frase={frase}
      />
      {/* prettier-ignore */}
      <Button
        onClick={consultarAPI}
      >
        Obtener frase
      </Button>
    </Contenedor>
  );
}

export default App;
