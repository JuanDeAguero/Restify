import "./styles/Notifications.css";
import translate from "./Translate";

const Notifications = ({ language }) => {
    return (
    <div className="notifications">
        <div className="notifications-text">{translate("There are no notifications.", language)}</div>
    </div>
    );
}

export default Notifications;