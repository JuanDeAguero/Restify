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
    <nav className="Nav">
        <div className="Nav-left">
            <img
                className="Nav-logo-img"
                src={process.env.PUBLIC_URL + "/imgs/logo.png"}
                alt="logo" />
            <div className="Nav-logo-txt">
                RESTIFY
            </div>
        </div>
        <div className="Nav-right">
            <button className="Nav-language-btn" onClick={onLanguageClicked}>
                <span className="Nav-language-icon material-symbols-outlined">
                    language
                </span>
            </button>
            <button className="Nav-notifications-btn">
                <span className="Nav-notifications-icon material-symbols-outlined">
                    notifications
                </span>
            </button>
            <button className="Nav-user-btn">
                <span className="Nav-user-icon material-symbols-outlined">
                    person
                </span>
            </button>
        </div>
    </nav>
    );
}

export default Nav;