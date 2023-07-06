import "./styles/PropertyItem.css";

const PropertyItem = () => {
    return (
    <div className="PropertyItem-wrapper">
        <div className="PropertyItem">
            <div className="PropertyItem-image"></div>
            <div className="PropertyItem-details">
                <div>
                    Name
                </div>
                <div>
                    Location
                </div>
            </div>
            <button className="PropertyItem-button"></button>
        </div>
    </div>
    );
}

export default PropertyItem;