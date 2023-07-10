import "./styles/PropertyItem.css";

const PropertyItem = ({img}) => {
    return (
    <div className="PropertyItem-wrapper">
        <div className="PropertyItem">
            <img className="PropertyItem-image" src={process.env.PUBLIC_URL + "/imgs/" + img} alt="property"></img>
            <div className="PropertyItem-details">
                <div>
                    Name
                </div>
                <div>
                    Location
                </div>
                <div>
                    Price
                </div>
            </div>
            <button className="PropertyItem-button"></button>
        </div>
    </div>
    );
}

export default PropertyItem;