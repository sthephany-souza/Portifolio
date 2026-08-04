import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Cards from "../../components/Cards"

import { useEffect, useState } from "react"

import styles from "./projetos.module.css"

function Projetos() {
    const [ repositories, setRepositories ] = useState ([])

    useEffect(() => {
        const buscarRepositorios = async() => {
            const response = await fetch("https://api.github.com/users/sthephany-souza/repos?page=1&per_page=50")
            const data = await response.json()

            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
            <Header />
                <section className={styles.projetos}>
                    {
                        repositories.length > 0 ? (
                            <section className={styles.lista}>
                                {
                                    repositories.map((repo) => (
                                        <Cards
                                            key={repo.id}
                                            name={repo.name}
                                            description={repo.description}
                                            html_url={repo.html_url}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <p>Carregando repositórios...</p>
                        )
                    }
                </section>
            <Footer />
        </>
    )
}

export default Projetos
