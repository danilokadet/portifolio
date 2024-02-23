import style from './Sobre.module.css'
import avatar from './Images/danilo.jpeg'
const Sobre = () => {
  return (
    <section className={style.sobre}>
      <div className={style.bio}>
        <img src={avatar} alt="" className={style.avatar} />
        <div className={style.techs}>
          <p>Sou o <span>Danilo</span>, analista desenvolvedor</p> <br />
          <p>Trabalho faz tempooooo na área de desenvolvimento</p> <br />

        </div>
      </div>

    </section>
  )
}

export default Sobre