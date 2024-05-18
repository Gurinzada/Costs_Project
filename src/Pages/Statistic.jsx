import { useEffect, useState } from "react"
import styles from "../styles/Statistic.module.scss"

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
    const [Most, setMost] = useState([])
    const [Minus, setMinus] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatas()
            setProjects(data)
            handleTypes(data)
            handleExpensive(data)
        }
        
        fetchData()
    },[])

    const handleExpensive = (data) => {
        const getTheHigh = []
        data.forEach((project) => {
            getTheHigh.push({Name: project.Title,
                Value: project.Value
            })
        })
        getTheHigh.sort((a,b) => a.Value - b.Value)
        const JustOne = []
        const JustMinus = []
        JustOne.push(getTheHigh[getTheHigh.length-1])
        setMost(() => JustOne)
        JustMinus.push(getTheHigh[0])
        setMinus(() => JustMinus)
    }

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
        <section className={styles.ContentStatistic}>
            <div className={styles.AllProjects}>
            <div>
                <h1>We have {projects.length} projects!</h1>
            </div>
            <div className={styles.ProjectsLength}>
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
            </div>
            </div>
            <div>
                <h1>Most expensive Project</h1>
                <div>
                    <>
                    {Most.length > 0 ? Most.map((item) => (
                        <h3>{item.Name}</h3>
                    )):<h4>We don't have any Projects here!</h4>}
                    </>
                    <>
                    {Most.length > 0 ? Most.map((item) => (
                        <span>R${item.Value}</span>
                    )):null}
                    </>
                </div>
            </div>
            <div>
                <h1>Project with lower value</h1>
                <div>
                    <>
                    {Minus.length > 0 ? Minus.map((item) => (
                    <h3>{item.Name}</h3>
                    )):null}
                    </>
                    <>
                    {Minus.length > 0 ? Minus.map((item) => (
                    <span>R${item.Value}</span>
                    )):null}
                    </>
                </div>
            </div>
        </section>
    )
}