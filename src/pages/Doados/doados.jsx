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
                <img src={protagonista} alt='' />
                <p>O protagonista</p>
                <p>Susanne Andrade</p>                
                <p>Ficção</p>
            </article>

            <article>
                <img src={persuasao} alt='' />
                <p>Persuasão - A arte de conseguir o que você quer</p>
                <p>Dave Lakhani</p>
                <p>Auto ajuda</p>
            </article>

            <article>
                <img src={arteDeConquistar} alt='' />
                <p>A arte de conquistra o SIM</p>
                <p>Robert B. Cialdini</p>
                <p>Saude e bem-estar</p>
            </article>

            </section>
        </section>

    )
}