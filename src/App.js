import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaOscuro : temaClaro }>
      <GlobalStyle />
      <BtnTema onClick={() => toggleTema()}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
