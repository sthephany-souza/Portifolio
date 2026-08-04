import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from "react-icons/fa"
import { DiMysql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs"

import styles from './sobre.module.css'

const Sobre = () => {
    return (
        <>
            <Header />

            <Container>
                <section className={styles.sobre}>
                    <div className={styles.bio}>
                        <div className={styles.textos}>
                            <h2>Sobre</h2>

                            <p>Sou <span>Sthephany Souza</span> <br />
                            <strong>Dev Full Stack Junior/Estágiário</strong> </p>

                            <p>Sou desenvolvedora em desenvolvimento na área.</p>

                            <p>Sou curiosa e adoro aprender assuntos novos</p>

                            <p>Gosto de ouvir músia, tocar teclado e ler nas horas vagas.</p>
                        </div>
                    </div>

                    <div className={styles.techs}>
                        <h3>Linguagens/Ferramentas</h3>
                        <div className={styles.icones}>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />
                            <FaReact />
                            <FaPhp />
                            <DiMysql />
                            <VscVscode />
                        </div>
                    </div>

                </section>
            </Container>

            <Footer />
        </>
    )
}

export default Sobre
