import "./styles/PropertyItem.css";
import "./styles/PropertyList.css";
import translate from "./Translate";

const PropertyItem = ({ title, province, city, price, img, language }) => {
    return (
    <div className="property-item-wrapper">
        <div className="property-item">
            <button className="property-item-button"></button>
            <img className="property-item-image" src={process.env.PUBLIC_URL + "/imgs/" + img} alt="property" />
            <div className="property-item-details">
                <div className="property-item-title">{title}</div>
                <div className="property-item-location">{city}, {province}</div>
                <div className="property-item-price">{"$" + String(price) + " CAD " + (language === "en" ? "night" : "nuit")}</div>
            </div>
        </div>
    </div>
    );
}

const PropertyList = ({ properties, language }) => {
    return (
    <div className="property-list">
        {properties.map((property, index) => (
            <PropertyItem
                title={translate(property.Title, language)}
                province={translate(property.Province, language)}
                city={translate(property.City, language)}
                price={property.Price}
                stars={property.Stars}
                img={property.Img}
                language={language} />
        ))}
    </div>
    );
}

export default PropertyList;