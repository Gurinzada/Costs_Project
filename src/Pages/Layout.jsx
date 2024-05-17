import { Link, Outlet } from "react-router-dom";


export default function Layout(){
    return(
        <div className="Layout">
            <header className='HeaderContainer'>
                <div className="ContainerImg">
                    <img src="../../img/costs_logo.png" alt="" className="HeroCost"/>
                </div>
                <nav className="NavBar">
                    <ul className="ContentNav">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to={"*"}><li>Contacts</li></Link>
                        <Link to={"/statistic"}><li>Statistics</li></Link>
                    </ul>
                </nav>
            </header>
            <main className="Main">
                <Outlet/>
            </main>
            <footer>
              <h5 className="CopyTitle">Costs &copy;2024</h5>
                <div className="ContentForImgsProfile">
                    <a href="https://github.com/Gurinzada?tab=repositories" target="_blank" rel="noopener noreferrer"><img src="../../img/github-142-svgrepo-com.svg" alt="" className="Same"/></a>
                    <a href="https://www.linkedin.com/in/augusto-mariano-01ba61245/" target="_blank" rel="noopener noreferrer"><img src="../../img/linkedin-svgrepo-com.svg" alt="" className="Same"/></a>
                </div>  
              <h6 className="ThankYou">Thank you for being a Cost's costumer!</h6>
            </footer>
        </div>
    )
}