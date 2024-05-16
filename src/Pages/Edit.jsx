import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
    }

    useEffect(() => {
        getDatas().then((res) => setProjects([res]))
        setChange(false)
    },[change])

    return(
        <>
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
                 </div>
                 </>
            )):null}
        </section>
        <form action="" method="PUT" onSubmit={handleUpdate}>
            <div className="Content">
                <label htmlFor="Title">Title</label>
                <input type="text" id="Title" required value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="Content">
                <label htmlFor="Value">Title</label>
                <input type="number" id="Value" required value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="Content">
            <label htmlFor="OptionsForProject">Project's type</label>
                <select name="" id="OptionsForProject" onChange={(e) => setOption(e.target.value)} value={option}>
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
                <button>Save!</button>
            </div>
        </form>
        </>
       
    )
}

export default Edit