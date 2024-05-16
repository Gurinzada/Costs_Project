import { Link } from "react-router-dom";

export default function Home(){
    return(
        <section>
            <div className="CostImg">
                <img src="../../img/savings.svg" alt="" />
            </div>
            <div>
                <Link to={"/newProject"}><button>Criar novo projeto?</button></Link>
            </div>
        </section>

)
}