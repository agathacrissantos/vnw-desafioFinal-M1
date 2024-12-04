import protagonista from '../../assets/images/protagonista.png'
import persuasao from '../../assets/images/persuasao.png'
import arteDeConquistar from '../../assets/images/artedeconquistar.png'
import s from '../../styles/doados.module.scss'

export default function Doados(){
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

            <article>
                <img src={persuasao} alt='Imagem do livro Persuasão' />
                <p>Persuasão - A arte de conseguir o que você quer</p>
                <p>Dave Lakhani</p>
                <p>Auto ajuda</p>
            </article>

            <article>
                <img src={arteDeConquistar} alt='Imagem do livro A arte de conquistar' />
                <p>A arte de conquistar o SIM</p>
                <p>Robert B. Cialdini</p>
                <p>Saude e bem-estar</p>
            </article>

            </section>
        </section>

    )
}