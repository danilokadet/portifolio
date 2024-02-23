import style from './Contatos.module.css'

import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'

const Contatos = () => {
  return (
    <>
      <section className={style.contatos}>
        <h1>Página Contatos</h1>
        <h2>Entre em Contatos</h2>
        <p>Para que possamos conversar sobre</p>
        <div className={style.icones}>
          <GoMail className={style.icone} />
          <BsInstagram className={style.icone} />
          <BsYoutube className={style.icone} />
          <BsGithub className={style.icone} />
          <BsLinkedin className={style.icone} />
        </div>
      </section>

    </>
  )
}

export default Contatos