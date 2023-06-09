import "./styles/Nav.css";

function Nav() {
    return (
    <nav className="Nav">
        <img className="Nav-logo-img" src={process.env.PUBLIC_URL + "/imgs/logo.png"} alt="logo" />
        <div className="Nav-logo-txt">RESTIFY</div>
    </nav>
    );
}

export default Nav;