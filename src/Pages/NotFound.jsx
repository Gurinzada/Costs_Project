import styles from "../styles/NotFound.module.scss"

export default function NotFound(){
    return(
        <div className={styles.ContentError}>
        <h1 className={styles.TitleError}>ERROR 404 NOT FOUND</h1>
        <h2 className={styles.Bulding}>We don't have this one yet!</h2>
        </div>

    )
}