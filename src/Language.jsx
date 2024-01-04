import "./styles/Language.css";

const Language = ({ setShowLanguage }) => {
    const onEnglishClicked = () => {
        setShowLanguage(false);
    };
    const onFrançaisClicked = () => {
        setShowLanguage(false);
    };
    return (
    <div className="language">
        <button className="language-english" onClick={onEnglishClicked}>
            English 🇬🇧
        </button>
        <div className="language-separation"></div>
        <button className="language-français" onClick={onFrançaisClicked}>
            Français 🇫🇷
        </button>
    </div>
    );
}

export default Language;