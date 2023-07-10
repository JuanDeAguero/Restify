import "./styles/PropertyList.css";
import PropertyItem from "./PropertyItem";

const PropertyList = () => {
    return (
    <div className="PropertyList">
        <PropertyItem name={"Waterfront Penthouse Overlooking Lake Ontario"} location={"Toronto, Ontario"} price={"$599 CAD night"} img={"toronto1.webp"}/>
        <PropertyItem name={"Luxury home in the heart of the Mile-End"} location={"Montreal, Quebec"} price={"$799 CAD night"} img={"montreal1.webp"}/>
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
    </div>
    );
}

export default PropertyList;