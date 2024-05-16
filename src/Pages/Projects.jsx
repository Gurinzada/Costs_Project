import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        <section>
            {projects.length > 0 ? projects.map((project) => (
                <>
                <div className="CardProject">
                    <div className="TitleCard">
                        <h4>{project.Title}</h4>
                    </div>
                    <div className="ContentInfos">
                        <span>{project.OptionProject}</span>
                        <span>{project.Value}</span>
                    </div>
                    <div className="Buttons">
                        <Link to={`/projects/update/${project.id}`}><button>Edit</button></Link>
                        <button onClick={() => handleDelete(project.id)}>Remove</button>
                    </div>
                </div>
                </>
            )):<h1>There isn't a project here!</h1>}
        </section>
    )
}

export default Projects