import React from 'react';
import SecaoCapa from '../SecaoCapa/';
import SecaoProduto from '../SecaoProduto/';
import SecaoSobre from '../SecaoSobre/';
import SecaoContato from '../SecaoContato';

export default function Content() {
    return (
        <main className='container-conteudo'>
            <SecaoCapa />
            <SecaoProduto />
            <SecaoSobre />
            <SecaoContato />           
        </main>
    );
}
