import styles from './ErrorPage.module.css'

export default function ErrorPage() {
    return (
        <div className={styles.error_container}>
            <h1 className={styles.error_h1}>404</h1>
            <p className={styles.error_text}>Oops! Something is wrong.</p>
            <a className={styles.error_button} href="#">
                ....Go back ? Click here!
            </a>
        </div>
    )
}