import "./styles/Nav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = ({ currentUser, showLanguage, setShowLanguage, showNotifications, setShowNotifications }) => {
    const navigate = useNavigate();
    const onLanguageClicked = () => {
        if (showLanguage) {
            setShowLanguage(false);
        } else {
            setShowLanguage(true);
            setShowNotifications(false);
        }
    };
    const onNotificationsClicked = () => {
        if (showNotifications) {
            setShowNotifications(false);
        } else {
            setShowNotifications(true);
            setShowLanguage(false);
        }
    };
    const onUserClicked = () => {
        if (currentUser) {
            navigate("/user");
        } else {
            navigate("/user/login");
        }
        setShowLanguage(false);
        setShowNotifications(false);
    };
    const onLogoClicked = () => {
        setShowLanguage(false);
        setShowNotifications(false);
        navigate("/");
    };
    return (
    <nav className="nav">
        <div className="nav-left">
            <Link className="nav-logo-img-wrapper" to="/" onClick={onLogoClicked}>
                <img className="nav-logo-img" src={process.env.PUBLIC_URL + "/imgs/logo.png"} alt="logo" />
            </Link>
            <Link className="nav-logo-txt" to="/" onClick={onLogoClicked}>RESTIFY</Link>
        </div>
        <div className="nav-right">
            <button className="nav-language-btn" onClick={onLanguageClicked}>
                <span className="nav-language-icon material-symbols-outlined">language</span>
            </button>
            <button className="nav-notifications-btn" onClick={onNotificationsClicked}>
                <span className="nav-notifications-icon material-symbols-outlined">notifications</span>
            </button>
            <button className="nav-user-btn" onClick={onUserClicked}>
                <span className="nav-user-icon material-symbols-outlined">person</span>
            </button>
        </div>
    </nav>
    );
}

export default Nav;