import "./styles/SearchDetails.css";
import { useEffect, useRef } from "react";
import Dates from "./Dates";
import Guests from "./Guests";
import Location from "./Location";

const SearchDetails = ({ showLocation, showDates, showGuests, setShowLocation, setShowDates, setShowGuests }) => {
    const details = useRef(0);
    const detailsWrapper = useRef(0);
    const onBackgroundClicked = () => {
        setShowLocation(false);
        setShowDates(false);
        setShowGuests(false);
    }
    useEffect(() => {
        if (showLocation) {
            details.current.style.height = "315px";
        } else if (showDates) {
            details.current.style.height = "200px";
        } else if (showGuests) {
            details.current.style.height = "200px";
        }
        if (showLocation || showDates || showGuests) {
            detailsWrapper.current.style.visibility = "visible";
        } else {
            details.current.style.height = "0";
            detailsWrapper.current.style.visibility = "collapse";
        }
    }, [showLocation, showDates, showGuests]);
    return (
    <div className="SearchDetails-wrapper" ref={detailsWrapper}>
        <div className="SearchDetails" ref={details}>
            {showLocation ? <Location /> : null}
            {showDates ? <Dates /> : null}
            {showGuests ? <Guests /> : null}
        </div>
        <button className="SearchDetails-background" onClick={ onBackgroundClicked }>
        
        </button>
    </div>
    );
}

export default SearchDetails;