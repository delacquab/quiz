import React from 'react';
import './App.css';
import List from "./components/List";

function App() {

  const questao1 = {
    pergunta: "Quanto é 1 + 1?",
    acertou: "",
    respondeu: false,
    respostas: [
      {
        resposta: "2",
        correto: true,
        escolhida: false,
        id: 1,
      },
      {
        resposta: "4",
        correto: false,
        escolhida: false,
        id: 2,
      },
      {
        resposta: "11",
        correto: false,
        escolhida: false,
        id: 3,
      },
      {
        resposta: "1 + 1",
        correto: false,
        escolhida: false,
        id: 4,
      }
    ],
  }

  const questao2 = {
    pergunta: "Quanto é 2 + 2?",
    acertou: "",
    respondeu: false,
    respostas: [
      {
        resposta: "1",
        correto: false,
        escolhida: false,
        id: 1,
      },
      {
        resposta: "2",
        correto: false,
        escolhida: false,
        id: 2,
      },
      {
        resposta: "3",
        correto: false,
        escolhida: false,
        id: 3,
      },
      {
        resposta: "4",
        correto: true,
        escolhida: false,
        id: 4,
      }
    ],
  }

  const [questoes, setQuestoes] = React.useState([questao1, questao2]);
  const [qtdAcertou, setQtdAcertou] = React.useState(0);
  const [qtdRespondeu, setQtdRespondeu] = React.useState(0);

  const handleClick = chave => {
    if (!questoes[chave.index].respondeu) {
      setQtdRespondeu(qtdRespondeu + 1)
      const newQuestoes = [...questoes];
      newQuestoes[chave.index].respostas[chave.index2].escolhida = !newQuestoes[chave.index].respostas[chave.index2].escolhida;

      if (newQuestoes[chave.index].respostas[chave.index2].correto) {
        newQuestoes[chave.index].acertou = "correta"
        setQtdAcertou(qtdAcertou + 1)
      }else {
        newQuestoes[chave.index].acertou = "errada"
      }

      newQuestoes[chave.index].respondeu = true

      setQuestoes(newQuestoes);
    }
  };

  const handleRefazer = event => {
    setQuestoes([questao1, questao2]);
    setQtdAcertou(0);
    setQtdRespondeu(0);
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Quiz - {qtdAcertou}</h1>
        <List
          questoes={questoes}
          onClick={handleClick}
        />
      </header>
      {qtdRespondeu === 2 &&
        <div data-resultado={qtdAcertou}>
          <h1>Acertou {qtdAcertou} de 2</h1>
          <button data-test="refazer" onClick={handleRefazer}>Refazer Quiz</button>
        </div>
      }
    </div >
  );
}

export default App;
