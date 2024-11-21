import frame from '../../assets/images/Frame.png'
import s from '../../styles/queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section>
            <section className={s.explicativo}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            </section>
            <section className={s.titleForms}>
                <img src={frame} alt="" />
                <h3>Informações do Livro
                </h3>
                <form className={s.formulario}>
                <input type='text' name='' id='' placeholder='Titulo' />
                <input type='text' name='' id='' placeholder='Categoria' />
                <input type='text' name='' id='' placeholder='Autor' />
                <input type='text' name='' id='' placeholder='Link da imagem' />
                <button>Doar</button>

                </form>
            </section>
        </section>
    )
}