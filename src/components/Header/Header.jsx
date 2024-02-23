import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
       <Link to="/"><span>Danilo Silva</span></Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contatos">Contatos</Link>
        </nav>
    </header>
  )
}

export default Header