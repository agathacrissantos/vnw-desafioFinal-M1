import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/Inicio/inicio'
import Doados from '../../pages/Doados/doados'
import QueroDoar from '../../pages/QueroDoar/queroDoar'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import s from '../../styles/header.module.scss'

export default function Header (){
    return(
        <BrowserRouter>
        <header>
            <section>
                <img src={logo} alt="Imagem de um livro" />
            <h1>Livros Vai na Web</h1>
            </section>
            <nav>
                <ul>
                    <li className={s.links}><Link to="/">Inicio</Link></li>
                    <li className={s.links}><Link to="/doados">Livros Doados</Link></li>
                    <li className={s.links}><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraBusca}>
                <input type='text' name='' id='' placeholder='O que você procura?' />
                <button>
                    <img src={search} alt='Imagem de uma lupa branca' />
                </button>
            </section>
        </header>

        <Routes>
             <Route path="/" element={<Inicio />} />
             <Route path="/doados" element={<Doados />} />
             <Route path="/queroDoar" element={<QueroDoar />} />
        </Routes>

        </BrowserRouter>
    )
}