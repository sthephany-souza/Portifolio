import styles from './cards.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

function Cards() {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>

                <a
                    href={html_url}
                    className={styles.botao}
                    target="_blank"
                    rel="noopener noreferrer">
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Cards