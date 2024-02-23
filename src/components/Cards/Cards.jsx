import style from './Cards.module.css'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Cards = ({ name, desciption, html_url }) => {
  return (
    <section className={style.cards}>
      <h3>{name}</h3>
      <p>{desciption}</p>
      <div className={style.card_footer}>
        <div className={style.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
        <Link to={html_url} className={style.card_botao} target="_blank" rel='nopenner norefferer'>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default Cards