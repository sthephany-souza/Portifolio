import { Link } from "react-router-dom"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

import styles from "./Home.module.css"

const Home = () => {
    return (
        <>
            <Header />

            <Container>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá sou <br />
                            <span>
                                Sthephany Souza <br />
                            </span>
                            Dev Full Stack
                        </p>

                        <Link to="/Sobre" className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba Mais
                        </Link>
                    </div>

                    <figure>
                        <img className={styles.img_dev} src="/developer-blue.svg" alt="Imagem da Home" />
                    </figure>
                </section>
            </Container>

            <Footer />
        </>
    )
}

export default Home
