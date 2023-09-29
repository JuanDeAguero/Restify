import "./styles/Language.css";

const Language = ({ setShowLanguage }) => {
    const onEnglishClicked = () => {
        setShowLanguage(false);
    };
    const onFrançaisClicked = () => {
        setShowLanguage(false);
    };
    return (
    <div className="Language">
        <button className="Language-english" onClick={onEnglishClicked}>
            English 🇬🇧
        </button>
        <div className="Language-separation"></div>
        <button className="Language-français" onClick={onFrançaisClicked}>
            Français 🇫🇷
        </button>
    </div>
    );
}

export default Language;