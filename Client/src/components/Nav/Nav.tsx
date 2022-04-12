import { NavLink } from "react-router-dom";
import '../../style/Nav.css';
import AuthHelper from "../../helpers/AuthHelper";

const Nav = () => {
    return (
        <header>
            <div className="container">
                <section className="logo">
                    {/* <strong>Safe</strong>
                    <span className="blue_dot"></span>
                    <strong>Me</strong> */}
                    {/* <img src={LogoGIF} alt="aboutUs" /> */}
                </section>
                <nav>
                    <NavLink to="/aboutus">About Us</NavLink>
                    { AuthHelper.isLogged() &&
                        <NavLink to="/Chat">Chat</NavLink>
                    }

                    { !AuthHelper.isLogged() &&
                        <NavLink to="/SignIn">Login/Register</NavLink>
                    }

                    { AuthHelper.isLogged() &&
                        <NavLink to="#" onClick={ () => { AuthHelper.logout(); window.location.href = '/' } }>Logout</NavLink>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Nav;
