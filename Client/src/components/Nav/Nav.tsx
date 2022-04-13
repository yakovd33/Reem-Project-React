import { NavLink } from "react-router-dom";
import '../../style/Nav.css';
import AuthHelper from "../../helpers/AuthHelper";
import logo from '../../assets/logo.svg'

const Nav = () => {
    return (
        <header>
            <div className="container">
                <NavLink to="/" className="logo">
                    <strong>Safe</strong>
                    <span className="blue_dot"></span>
                    <strong>Me</strong>
                    <img className="logo-img" src={logo} alt="aboutUs" />
                </NavLink>
                <nav>
                    <NavLink to="/aboutus">About Us</NavLink>
                    <NavLink to="/Recommendations">Recommendations</NavLink>
                    { AuthHelper.isLogged() &&
                        <NavLink to="/Chat">Chat</NavLink>
                    }

                    { !AuthHelper.isLogged() &&
                        <NavLink to="/SignIn">Login/Register</NavLink>
                    }

                    { AuthHelper.isLogged() && AuthHelper.getUser().isAdmin &&
                        <NavLink to="/Statistics">Statistics</NavLink>
                    }

                    { AuthHelper.isLogged() &&
                        <NavLink to="#" onClick={ () => { AuthHelper.logout(); window.location.href = '/' } }>{ AuthHelper.getUser().username }(Logout)</NavLink>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Nav;
