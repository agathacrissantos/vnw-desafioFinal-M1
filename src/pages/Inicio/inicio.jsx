import community from '../../assets/images/community.png'
import reading from '../../assets/images/reading.png'
import transform from '../../assets/images/transform.png'
import balance from '../../assets/images/balance.png'

import s from '../../styles/inicio.module.scss'

export default function Inicio(){
    return(
        <main>
        <section className={s.fundoInicio}>
        <p>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
        </section>
        <section className={s.container}>
        <section className={s.firstBox}>
            <h1>Por que devo doar?</h1>
        </section>
        <section className={s.secondBox}>
            <article>
                <img src={community} alt='' />
                <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </article>

            <article>
                <img src={reading} alt='' />
                <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </article>

            <article>
                <img src={transform} alt='' />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </article>

            <article>
                <img src={balance} alt='' />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </article>
        </section>
        </section>
        </main>
    )
}