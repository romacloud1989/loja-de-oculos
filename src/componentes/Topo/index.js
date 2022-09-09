import React from 'react';
import "../../App.css";

export default function Topo() {
    return (
        <header className='topo-container'>
            <div className='limitar-secao topo'>
                <figure>
                <img src="logo.png" alt="Logo da òtica" className='img-logo'/>
                </figure>
                <nav className='menu-topo'>
                    <a href='#'>PRODUTOS</a>
                    <a href='#'>SOBRE</a>
                    <a href='#'>CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

