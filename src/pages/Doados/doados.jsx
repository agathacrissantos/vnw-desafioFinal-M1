import protagonista from '../../assets/images/protagonista.png'
import s from '../../styles/doados.module.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'


export default function Doados(){

    const [livros,setLivros] = useState([])

    const getLIvros = async () => {
        const response = await axios.get('https://api-livros-vnw-projeto.onrender.com/livros')
        setLivros(response.data)
    }

    useEffect(() => {
        getLIvros()
    },[])


    return(
        <section className={s.livrosDoados}>
            <section className={s.titulo}>
            <h2>Livros Doados</h2>
            </section>
            <section className={s.cards}>
            <article>
                <img src={protagonista} alt='Imagem do livro O Protagonista' />
                <p>O protagonista</p>
                <p>Susanne Andrade</p>                
                <p>Ficção</p>
            </article>
            {livros.map((index,key) => (
                <article key={key}>
                    <h3>{index.titulo}</h3>
                    <p>{index.categoria}</p>
                    <p>{index.autor}</p>
                    <img src={index.imagem_url} alt={index.titulo} />
                </article>
            ))}

            </section>
        </section>

    )
}