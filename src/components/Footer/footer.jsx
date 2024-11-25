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
            <h3>4002-8922</h3>
            <nav className={s.redesSociais}>
                    <a href='https://pt-br.facebook.com/' target='_blank' >
                    <img src={facebook} alt='Icone do Facebook' />
                    </a>

                    <a href='https://x.com/login-to/' target='_blank' >
                    <img src={twiter} alt='Icone do Twiter' />
                    </a>

                    <a href='https://www.youtube.com/' target='_blank' >
                    <img src={youtube} alt='Icone do Youtube' />
                    </a>

                    <a href='https://br.linkedin.com/' target='_blank' >
                    <img src={linkedin} alt='Icone do Linkedin' />
                    </a>

                    <a href='https://www.instagram.com/?hl=pt-br' target='_blank' >
                    <img src={instagram} alt='Icone do Instagram' />
                    </a>
            </nav>
            </section>
            <section className={s.rodape}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}