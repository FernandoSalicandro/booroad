import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar position-sticky top-0 start-0 z-3 navbar-expand-lg  bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">BOOROAD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/home"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={'/aggiungiviaggio'}>Aggiungi Viaggio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}