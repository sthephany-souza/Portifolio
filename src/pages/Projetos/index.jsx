import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Cards from "../../components/Cards"

import { useEffect, useState } from "react"

import styles from './projetos.module.css'

const Projetos = () => {
    const [ repositories, setRepositories ] = useState ([])

    useEffect(() => {
        const buscarRepositorios = async() => {
            const response = await fetch('')
            const data = await response.json()
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => {
                                <Cards
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            })
                        }
                    </section>
                ) : (
                    <p>Carregando Projetos...</p>
                )
            }
        </section>
    )
}

export default Projetos
