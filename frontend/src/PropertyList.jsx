import "./styles/PropertyList.css";
import PropertyItem from "./PropertyItem";

const PropertyList = () => {
    return (
    <div className="PropertyList">
        <PropertyItem
            title={"Penthouse Above the Clouds with Surreal Views"}
            location={"Toronto, Ontario"}
            price={"$599 CAD night"}
            stars={4.9}
            img={"toronto1.webp"} />
        <PropertyItem
            title={"Luxury Home in the Heart of the Mile-End"}
            location={"Montreal, Quebec"}
            price={"$799 CAD night"}
            stars={4.5}
            img={"montreal1.webp"} />
        <PropertyItem
            title={"Modern Log Cabin"}
            location={"Celista, British Columbia"}
            price={"$671 CAD night"}
            stars={4.8}
            img={"bc1.webp"} />
        <PropertyItem
            title={"Modern Log Cabin"}
            location={"Celista, British Columbia"}
            price={"$671 CAD night"}
            stars={4.8}
            img={"bc1.webp"} />
    </div>
    );
}

export default PropertyList;