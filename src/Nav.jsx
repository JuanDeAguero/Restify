import "./styles/Nav.css";

const Nav = ({ showLanguage, setShowLanguage }) => {
    const onLanguageClicked = () => {
        if (showLanguage) {
            setShowLanguage(false);
        } else {
            setShowLanguage(true);
        }
    };
    return (
    <nav className="nav">
        <div className="nav-left">
            <img
                className="nav-logo-img"
                src={process.env.PUBLIC_URL + "/imgs/logo.png"}
                alt="logo">
            </img>
            <div className="nav-logo-txt">
                RESTIFY
            </div>
        </div>
        <div className="nav-right">
            <button className="nav-language-btn" onClick={onLanguageClicked}>
                <span className="nav-language-icon material-symbols-outlined">
                    language
                </span>
            </button>
            <button className="nav-notifications-btn">
                <span className="nav-notifications-icon material-symbols-outlined">
                    notifications
                </span>
            </button>
            <button className="nav-user-btn">
                <span className="nav-user-icon material-symbols-outlined">
                    person
                </span>
            </button>
        </div>
    </nav>
    );
}

export default Nav;