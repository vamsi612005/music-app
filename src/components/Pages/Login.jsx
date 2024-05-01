import React from "react";
import Musicnote from '../assets/img/musicnote.png';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Music</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img src={Musicnote} alt="hi" height="600px" width="auto"/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <p>Without music, life would be a mistake</p>
                            <Link to={"/Signin"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;