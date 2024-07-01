import React, {useContext } from 'react'
import {
    Link
} from "react-router-dom";
import light from "../images/light.png";
import dark from "../images/dark.png";
import Theme from '../context/Theme';

const NavBar = () => {
    const {theme, toggleTheme} = useContext(Theme)

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme={theme}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">DailyNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        </ul>
                    <div className="d-flex align-items-center">
                        <img src={theme === "light" ? dark : light} style={{ width: "35px", height: "35px" }} onClick={toggleTheme} alt='*' />
                    </div>
                </div>
                    {/* for dark mode on off */}
                    </div>
            </nav>
        </div>
    )

}


export default NavBar
