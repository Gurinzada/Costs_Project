import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="Layout">
            <header className="HeaderContainer">
                <div className="ContainerImg">
                    <img src="../../img/costs_logo.png" alt="" />
                </div>
                <nav className="NavBar">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <li>Contacts</li>
                        <li>About us</li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>Costs 2024</footer>
        </div>
    )
}