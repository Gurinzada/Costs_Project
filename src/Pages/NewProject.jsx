import { useState } from "react"

export default function NewProject(){

    const [title, setTitle] = useState('')
    const [valueProject, setValueProject] = useState(0)
    const [optionProject, setOptionProject] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProject = {
            Title: title,
            Value: valueProject,
            OptionProject: optionProject
        }

       const response = await fetch("http://localhost:3000/projects",{
            method:"POST",
            body: JSON.stringify(newProject),
            headers:{
                "Content-Type": "application/json"
            }
        })

        if(response.ok){
            const divFor = document.getElementById('BntDiv')
            const responseOk = document.createElement("div")
            responseOk.innerText = "Success"
            responseOk.classList.add("Success")

            divFor.append(responseOk)

            setTimeout(() => {
                divFor.removeChild(responseOk)
            },4000)
        }

        setTitle("")
        setValueProject(0)
        setOptionProject("")
    }

    return(
        <form action="" method="post" onSubmit={handleSubmit}>
            <h3>New Project here!</h3>
            <div className="Content">
                <label htmlFor="Name">Project Name</label>
                <input type="text" name="" id="Name" required onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className="Content">
                <label htmlFor="ValueProject">Project's value</label>
                <input type="number" name="" id="ValueProject" min={0} step={0.01} onChange={(e) => setValueProject(e.target.value)} value={valueProject}/>
            </div>
            <div className="Content">
                <label htmlFor="OptionsForProject">Project's type</label>
                <select name="" id="OptionsForProject" onChange={(e) => setOptionProject(e.target.value)} value={optionProject}>
                    <option value="" selected disabled>Choose an option</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Front-End">Front-End</option>
                    <option value="FullStack">FullStack</option>
                    <option value="DB">Database</option>
                    <option value="Quality">Quality</option>
                    <option value="SoftwareTest">Test</option>
                </select>
            </div>
            <div className="BntDiv" id="BntDiv">
                <button>Send!</button>
            </div>
        </form>
    )
}