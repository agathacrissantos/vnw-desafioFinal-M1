import facebook from '../../assets/images/facebook.png'
import twiter from '../../assets/images/Twitter.png'
import youtube from '../../assets/images/youtube.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'
import s from '../../styles/footer.module.scss'


export default function Footer (){
    return(
        <footer>
            <section className={s.contato}>
            <p>4002-8922</p>
            <nav>
                <figure className={s.redesSociais}>
                    <img src={facebook} alt='Icone do Facebook' />
                    <img src={twiter} alt='Icone do Twiter' />
                    <img src={youtube} alt='Icone do Youtube' />
                    <img src={linkedin} alt='Icone do Linkedin' />
                    <img src={instagram} alt='Icone do Instagram' />
                </figure>
            </nav>
            </section>
            <section className={s.rodape}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}