import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"

import styles from "./NotFound.module.css"

function NotFound(){
  return (
    <>
        <Header />

        <Container>
            <h2 className={styles.titulo2}>Ops!! Algo deu errado</h2>

            <div className={styles.textos}>
                <span className={styles.erro}>404</span> <br />

                <strong className={styles.mensagem_erro}>
                    Página não encontrada!
                </strong>
            </div>
        </Container>

        <Footer />
    </>
  )
}

export default NotFound
