import "./styles/PropertyItem.css";

const PropertyItem = ({title, location, price, img}) => {
    return (
    <div className="PropertyItem-wrapper">
        <div className="PropertyItem">
            <button className="PropertyItem-button"></button>
            <img
                className="PropertyItem-image"
                src={process.env.PUBLIC_URL + "/imgs/" + img}
                alt="property" />
            <div className="PropertyItem-details">
                <div className="PropertyItem-title">
                    {title}
                </div>
                <div className="PropertyItem-location">
                    {location}
                </div>
                <div className="PropertyItem-price">
                    {price}
                </div>
            </div>
        </div>
    </div>
    );
}

export default PropertyItem;