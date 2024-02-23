import styles from './Home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou
          </p>
          <br />
          <span>Danilo</span> <br />
          <p>Dev full Stack</p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>Saiba mais sobre mim</Link>
        </div>
        <figure><img src="/developer-red.svg" alt="Imagem de home" className={styles.img} /></figure>
      </section>
    </>
  )
}

export default Home