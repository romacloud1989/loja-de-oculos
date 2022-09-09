import React from 'react';
import imagem1 from '../../../src/assets/imagens/loja.png';
import imagem2 from '../../../src/assets/imagens/atendimento.png';

export default function SecaoSobre() {
    return(
        <section className='sobre-container'>
            <div className='limitar-secao sobre-box'>
                <h1>QUEM SOMOS NÓS?</h1>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de 
                    renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
            </div>
            <div className='limitar-secao box-card-sobre'>
                <div className='card-imagem'>
                    <img src={imagem1} alt="Imagem da loja" />
                </div>
                <div className='card-imagem'>
                    <h2>NOSSAS FILIAIS</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className='card-imagem'>
                    <h2>ATENDIMENTO FLEXÍVEL</h2>
                    <p>Nossa equipe é treinada para te atender</p>
                </div>
                <div className='card-imagem'>
                    <img src={imagem2} alt="Imagem do atendente" />
                </div>
            </div>
        </section>
    );
}