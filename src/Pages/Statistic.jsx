import { useEffect, useState } from "react"

const getDatas = async () => {
    const response = await fetch(`http://localhost:3000/projects`)
    const data = await response.json()
    return data
}

export default function Statistics(){
    const [projects, setProjects] = useState([])
    const [Mobile, setMobile] = useState([])
    const [Front, setFront] = useState([])
    const [Back, setBack] = useState([])
    const [Db, setDb] = useState([])
    const [Full, setFull] = useState([])
    const [Quality, setQA] = useState([])
    const [Test, setTes] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatas()
            setProjects(data)
            handleTypes(data)
            console.log(projects)
        }
        
        fetchData()
    },[])

    const handleTypes = (data) => {
        const Mobile = []
        const BackE = []
        const FrontE = []
        const db = []
        const TestSoftware = []
        const QA = []
        const FullStack = []
        data.forEach((project) => {
            switch (project.OptionProject) {
                case "Mobile":
                    Mobile.push(project)
                    break
                case "Front-End":
                    FrontE.push(project)
                    break
                case "Back-End":
                    BackE.push(project)
                    break
                case "FullStack":
                    FullStack.push(project)
                    break
                case "DB":
                    db.push(project)
                    break;
                case "Quality":
                    QA.push(project)
                    break;
                default:
                    TestSoftware.push(project)
            }
        })

        setMobile(Mobile)
        setDb(db)
        setBack(BackE)
        setFront(FrontE)
        setFull(FullStack)
        setQA(QA)
        setTes(TestSoftware)
    }


    return(
        <section>
            <h1>Our Statistic Projects</h1>
            <div>
                <h3>Back-End Projects</h3>
                <span>{Back.length}</span>
            </div>
            <div>
                <h3>Front-End Projects</h3>
                <span>{Front.length}</span>
            </div>
            <div>
                <h3>FullStack Projects</h3>
                <span>{Full.length}</span>
            </div>
            <div>
                <h3>DataBase Projects</h3>
                <span>{Db.length}</span>
            </div>
            <div>
                <h3>Mobile Projects</h3>
                <span>{Mobile.length}</span>
            </div>
            <div>
                <h3>QA Projects</h3>
                <span>{Quality.length}</span>
            </div>
            <div>
                <h3>Test Projects</h3>
                <span>{Test.length}</span>
            </div>
        </section>
    )
}