import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Projects.module.scss"

const getDatas = async () => {
    const response = await fetch("http://localhost:3000/projects")
    const data = await response.json()
    return data
}

function Projects(){

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getDatas().then((res) => setProjects(res))
    },[])

    const handleDelete = async (index) => {
        await fetch(`http://localhost:3000/projects/${index}`, {
            method:"DELETE"
        })
        setProjects((e) => e.filter((e) => e.id !== index))
    }

    return(
        <section className={styles.ContentForCards}>
            {projects.length > 0 ? projects.map((project) => (
                <>
                <div className={styles.CardProject}>
                    <div className={styles.TitleContainer}>
                        <h4>{project.Title}</h4>
                    </div>
                    <div className={styles.ContentInfos}>
                        <div className={styles.SeparatorRigth}><span>Type: {project.OptionProject}</span></div>
                        <div className={styles.SeparatorLeft}><span>Value: R${project.Value}</span></div>
                    </div>
                    <div className={styles.ButtonsContainer}>
                        <Link to={`/projects/update/${project.id}`}><button className={styles.EditBnt}>Edit</button></Link>
                        <button onClick={() => handleDelete(project.id)} className={styles.Remove}>Remove</button>
                    </div>
                </div>
                </>
            )):<h1>There isn't a project here!</h1>}
        </section>
    )
}

export default Projects