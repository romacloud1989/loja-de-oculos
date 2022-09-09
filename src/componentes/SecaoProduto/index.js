import React from 'react';
import oculos1 from '../../../src/assets/imagens/oculos01.png';
import oculos2 from '../../../src/assets/imagens/oculos02.png';
import oculos3 from '../../../src/assets/imagens/oculos03.png';
import oculos4 from '../../../src/assets/imagens/oculos04.png';

export default function SecaoProduto() {
    return (
        <section className='produto-container'>
            <div className='limitar-secao produto'>
                <h2>NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>            
            <div className='card-container'>
                <div className='card-box'>
                    <h2>Óculos de Grau</h2>
                    <img src={oculos1} />
                    <p>R$ 500,00</p>
                </div>
                <div className='card-box'>
                    <h2>Óculos transition</h2>
                    <img src={oculos2} />
                    <p>R$ 750,00</p>
                </div>
                <div className='card-box'>
                    <h2>Óculos de sol</h2>
                    <img src={oculos3} />
                    <p>R$ 700,00</p>
                </div>
                <div className='card-box'>
                    <h2>Óculos infantil</h2>
                    <img src={oculos4} />
                    <p>R$ 500,00</p>
                </div>                
            </div>
            <div>
                <p>Todos os nossos produtos incluem:</p>
                <ul className='lista-box'>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
                </div>
            </div> 
        </section>
    );
}
