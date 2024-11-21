import frame from '../../assets/images/Frame.png'
import s from '../../styles/queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section>
            <section className={s.explicativo}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            </section>
            <section className={s.boxForms}>
                <div className={s.forms}>
                <img src={frame} alt="" />
                <h3>Informações do Livro
                </h3>
                </div>
                <form className={s.formulario}>
                <input className={s.entrada} type='text' name='' id='' placeholder='Titulo' />
                <input className={s.entrada} type='text' name='' id='' placeholder='Categoria' />
                <input className={s.entrada} type='text' name='' id='' placeholder='Autor' />
                <input className={s.entrada} type='text' name='' id='' placeholder='Link da imagem' />
                <input className={s.button} type='submit' value='Doar' />
                </form>
            </section>
        </section>
    )
}