import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "../styles/FormProject.module.scss"
import stylesCard from "../styles/Projects.module.scss"

function Edit(){
    const [projects, setProjects] = useState([])
    const [name, setName] = useState("")
    const [value, setValue] = useState(0)
    const [option, setOption] = useState("")
    const [change, setChange] = useState(false)
    const {IDproject} = useParams()

    const getDatas = async () => {
        const response = await fetch(`http://localhost:3000/projects/${IDproject}`)
        const data = await response.json()
        return data
    }

    const handleUpdate = async(e) => {
        e.preventDefault()
        const update = {
            Title: name,
            Value: value,
            OptionProject: option
        }

        await fetch(`http://localhost:3000/projects/${IDproject}`,{
            method:"PUT",
            body: JSON.stringify(update),
            headers:{
                "Content-Type": "application/json"
            }
        })

        setChange(true)
        setName('')
        setValue(0)
        setOption('')
    }

    useEffect(() => {
        getDatas().then((res) => setProjects([res]))
        setChange(false)
    },[change])

    return(
        <div className={stylesCard.ContainerEditContent}>
         <section className={stylesCard.ContentForCards}>
            {projects.length > 0 ? projects.map((project) => (
                 <>
                 <div className={stylesCard.CardProject}>
                     <div className={stylesCard.TitleContainer}>
                         <h4>{project.Title}</h4>
                     </div>
                     <div className={stylesCard.ContentInfos}>
                        <div className={stylesCard.SeparatorRigth}><span>Type: {project.OptionProject}</span></div>
                        <div className={stylesCard.SeparatorLeft}><span>Value: R${project.Value}</span></div>
                    </div>
                 </div>
                 </>
            )):null}
        </section>
        <form action="" method="PUT" onSubmit={handleUpdate} className={styles.Form}>
            <div className={styles.Content}>
                <label htmlFor="Title" className={styles.Labels}>Title</label>
                <input type="text" id="Title" required value={name} onChange={(e) => setName(e.target.value)} className={styles.Input} placeholder="The new Project's name"/>
            </div>
            <div className={styles.Content}>
                <label htmlFor="Value" className={styles.Labels}>Value</label>
                <input type="number" id="Value" required value={value} onChange={(e) => setValue(e.target.value)} className={styles.Input}/>
            </div>
            <div className={styles.Content}>
            <label htmlFor="OptionsForProject" className={styles.Labels}>Project's type</label>
                <select name="" id="OptionsForProject" onChange={(e) => setOption(e.target.value)} value={option} className={styles.Input}>
                    <option value="" selected disabled>Choose an option</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Front-End">Front-End</option>
                    <option value="FullStack">FullStack</option>
                    <option value="DB">Database</option>
                    <option value="Quality">Quality</option>
                    <option value="Software Test">Test</option>
                </select>
            </div>
            <div>
                <button className = {styles.BtnSend}>Save!</button>
            </div>
        </form>
        </div>
       
    )
}

export default Edit