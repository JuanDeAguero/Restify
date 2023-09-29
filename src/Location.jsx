import "./styles/Location.css";

const Location = () => {
    return (
    <div className="Location">
        <img
            className="Location-map"
            src={process.env.PUBLIC_URL + "/imgs/canada.png"}
            alt="map" />
        <div className="Location-selected">
            <span class="Location-selected-icon material-symbols-outlined">
                location_on
            </span>
            <div className="Location-selected-txt">
                Ontario, ON
            </div>
        </div>
        <button className="Location-ON">
            ON
        </button>
    </div>
    );
}

export default Location;