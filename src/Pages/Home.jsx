import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss"

export default function Home(){
    return(
        <section className={styles.ContentForNewProject}>
            <div>
                <img src="../../img/savings.svg" alt="" className={styles.CostImgContainer}/>
            </div>
            <div className={styles.ContainerNewProject}>
                <Link to={"/newProject"}><button className={styles.NewProject}>Criar novo projeto?</button></Link>
            </div>
        </section>

)
}