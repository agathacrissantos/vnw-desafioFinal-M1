import frame from '../../assets/images/Frame.png'
import s from '../../styles/queroDoar.module.scss'
import axios from 'axios'
import {useState} from 'react'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [autor, setAutor] = useState('')
    const [imagem_url, setImagem_url] = useState('')

    const enviarDados = async () => {
        const urlApi ="https://https://api-livros-vnw-projeto.onrender.com/doar"

        const dadosEnviar = {
            titulo: titulo,
            categoria: categoria,
            autor: autor,
            imagem_url: imagem_url
        }

        await axios.post(urlApi, dadosEnviar)

        alert('Livro doado com sucesso!')

        setTitulo('')
        setCategoria('')
        setAutor('')
        setImagem_url('')
    }

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImagem_url = (e) => {
        setImagem_url(e.target.value)
    }

    return(
        <main>
            <section className={s.explicativo}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            </section>
            <section className={s.boxForms}>
                <div className={s.forms}>
                <img src={frame} alt="" />
                <h3>Informações do Livro
                </h3>
                </div>
                <form className={s.formulario} onSubmit={(e) => e.preventDefault()}>
                <input className={s.entrada} type='text' name='' id='' placeholder='Titulo' onChange={capturaTitulo} value={titulo}/>
                <input className={s.entrada} type='text' name='' id='' placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                <input className={s.entrada} type='text' name='' id='' placeholder='Autor' onChange={capturaAutor} value={autor}/>
                <input className={s.entrada} type='text' name='' id='' placeholder='Link da imagem' onChange={capturaImagem_url} value={imagem_url}/>
                <input className={s.button} type='submit' value='Doar' onClick={enviarDados}/>
                </form>
            </section>
        </main>
    )
}