import "./styles/Language.css";

const Language = ({ setShowLanguage }) => {
    const onEnglishClicked = () => {
        localStorage.setItem("language", "en");
        setShowLanguage(false);
    };
    const onFrançaisClicked = () => {
        localStorage.setItem("language", "fr");
        setShowLanguage(false);
    };
    return (
    <div className="language">
        <button className="language-english" onClick={onEnglishClicked}>English 🇬🇧</button>
        <div className="language-separation" />
        <button className="language-français" onClick={onFrançaisClicked}>Français 🇫🇷</button>
    </div>
    );
}

export default Language;