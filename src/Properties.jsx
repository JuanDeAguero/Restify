import "./styles/PropertyItem.css";
import "./styles/PropertyList.css";

const PropertyItem = ({title, location, price, img}) => {
    return (
    <div className="property-item-wrapper">
        <div className="property-item">
            <button className="property-item-button"></button>
            <img
                className="property-item-image"
                src={process.env.PUBLIC_URL + "/imgs/" + img}
                alt="property">
            </img>
            <div className="property-item-details">
                <div className="property-item-title">
                    {title}
                </div>
                <div className="property-item-location">
                    {location}
                </div>
                <div className="property-item-price">
                    {price}
                </div>
            </div>
        </div>
    </div>
    );
}

const PropertyList = () => {
    return (
    <div className="property-list">
        <PropertyItem
            title={"Penthouse Above the Clouds with Surreal Views"}
            location={"Toronto, Ontario"}
            price={"$599 CAD night"}
            stars={4.9}
            img={"toronto1.png"} />
        <PropertyItem
            title={"Luxury Home in the Heart of the Mile-End"}
            location={"Montreal, Quebec"}
            price={"$799 CAD night"}
            stars={4.5}
            img={"montreal1.png"} />
        <PropertyItem
            title={"Modern Log Cabin"}
            location={"Celista, British Columbia"}
            price={"$671 CAD night"}
            stars={4.8}
            img={"bc1.png"} />
        <PropertyItem
            title={"Modern Log Cabin"}
            location={"Celista, British Columbia"}
            price={"$671 CAD night"}
            stars={4.8}
            img={"ontario.png"} />
        <PropertyItem
            title={"Modern Log Cabin"}
            location={"Celista, British Columbia"}
            price={"$671 CAD night"}
            stars={4.8}
            img={"bc1.png"} />
        <PropertyItem
            title={"Modern Log Cabin"}
            location={"Celista, British Columbia"}
            price={"$671 CAD night"}
            stars={4.8}
            img={"bc1.png"} />
    </div>
    );
}

export default PropertyList;