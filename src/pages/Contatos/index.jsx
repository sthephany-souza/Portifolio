import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

import styles from "./Contatos.module.css"

import { CiMail } from "react-icons/ci";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contatos = () => {
    return (
        <>
            <>
            <Header />

            <Container>
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        <a href="mailto:sthephy030@gmail.com" target="_blank" rel="noopener noreferrer">
                            <CiMail className={styles.icone} />
                        </a>

                        <a href="http://linkedin.com/in/sthephanyorsouza" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className={styles.icone} />
                        </a>
                        
                        <a href="http://github.com/sthephany-souza" target="_blank" rel="noopener noreferrer">
                            <BsGithub className={styles.icone} />
                        </a>
                    </div>
                </section>
            </Container>

            <Footer />
        </>
        </>
    )
}

export default Contatos
