import "./styles/PropertyList.css";
import PropertyItem from "./PropertyItem";

const PropertyList = () => {
    return (
    <div className="PropertyList">
        <PropertyItem img={"toronto1.webp"}/>
        <PropertyItem />
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