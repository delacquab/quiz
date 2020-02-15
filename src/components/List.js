import React from "react";

function List(props) {
    return (
        <div>
            {
                props.questoes.map((questao, index) => {
                    return (
                        <div>

                            <h1  key={index}>
                                {questao.pergunta}
                            </h1>

                            <ul data-resposta={questao.acertou} data-test="pergunta">
                                {questao.respostas.map((resp, index2) => {
                                    return (
                                        <li data-test="opcao" key={index2} onClick={e => props.onClick({ index, index2 })}>
                                            {resp.escolhida && 'V - '}
                                            {resp.resposta}
                                        </li>
                                    );
                                })}

                                <br></br>
                                <br></br>
                            </ul >
                        </div>
                    );
                })
            }
        </div>
    );
}

export default List;

