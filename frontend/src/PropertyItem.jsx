import "./styles/PropertyItem.css";

const PropertyItem = ({name, location, price, img}) => {
    return (
    <div className="PropertyItem-wrapper">
        <div className="PropertyItem">
            <img className="PropertyItem-image" src={process.env.PUBLIC_URL + "/imgs/" + img} alt="property"></img>
            <div className="PropertyItem-details">
                <div className="PropertyItem-name">
                    {name}
                </div>
                <div className="PropertyItem-location">
                    {location}
                </div>
                <div className="PropertyItem-price">
                    {price}
                </div>
            </div>
            <button className="PropertyItem-button"></button>
        </div>
    </div>
    );
}

export default PropertyItem;