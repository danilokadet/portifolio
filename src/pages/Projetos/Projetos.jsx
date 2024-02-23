import style from './Projetos.module.css'
import Cards from '../../components/Cards/Cards'
import { useState } from 'react'
import { useEffect } from 'react'

const Projetos = () => {

  const [repositories, setRepositories] = useState([])
  // Consulta api de fora 
  useEffect(() => {
    const fetchReopsitory = async () => {
      const response = await fetch('https://api.github.com/users/edsonmaia/repos?page=1&per_page=50')
      const data = await response.json()
      setRepositories(data)
    }
    fetchReopsitory()
  }, [])

  return (
    <section className={style.projeto}>
      <h2>Página Projetos</h2>
      {

        repositories.length > 0 ? (
          <section className={style.list}>
            {
              repositories.map(
                repo =>
                  <Cards
                    key={repo.id}
                    name={repo.name}
                    desciption={repo.description}
                    html_url={repo.html_url}
                  />
              )
            }
          </section>
        ) : (
          <p>Carregando repositórios...</p>
        )
      }
    </section>
  )
}

export default Projetos