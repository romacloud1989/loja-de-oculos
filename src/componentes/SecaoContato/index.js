import React from 'react';
import fb from '../../../src/assets/imagens/fb.png';
import telefone from '../../../src/assets/imagens/telefone.png';
import tt from '../../../src/assets/imagens/tt.png';
import email from '../../../src/assets/imagens/email.png';
import local from '../../../src/assets/imagens/local.png';
import ig from '../../../src/assets/imagens/ig.png';

export default function SecaoContato() {
    return ( 
        <section className='contato-container'>
        <div className='limitar-secao'>
            <div className='contato-box'>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>
            <div className='contato-social'>
                <div className='contato'>
                    <table>
                        <caption><h3>Contato</h3></caption>                    
                        <tr>                    
                            <td><img src={local} /></td>
                            <td><p>Maringá, PR</p></td>
                        </tr>
                        <tr>
                            <td><img src={telefone} /></td>
                            <td><p>44 - 99999-9999</p> </td>
                        </tr>    
                        <tr>
                            <td><img src={email} /> </td>
                            <td><p>contato@devteste.com</p></td>
                        </tr>
                    </table>
                    <table>
                        <caption><h3>Nossas redes sociais</h3></caption>
                            <tr>
                                <td><img src={fb} /></td>
                                <td><p>@OticaVida</p> </td>
                            </tr>
                            <tr>
                                <td><img src={ig} />  </td>
                                <td><p>@oticavidarj</p></td>
                            </tr>
                            <tr>
                                <td><img src={tt} /> </td>
                                <td><p>@oticavidarj</p></td>
                            </tr>
                    </table>
                </div>
            </div>
        </div>
        </section>
    );
}