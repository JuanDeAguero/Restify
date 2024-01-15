import "./styles/SearchBar.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import firebaseDatabase from "./Database";
import Property from "./Property";
import SearchOptions from "./SearchOptions";
import translate from "./Translate";

const SearchBar = ({ setProperties, setShowLanguage, setShowNotifications }) => {
    const navigate = useNavigate();
    const [location, setLocation] = useState("Location");
    const [guests, setGuests] = useState("Guests");
    const [showLocation, setShowLocation] = useState(false);
    const [showDates, setShowDates] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    const [optionsWidth, setOptionsWidth] = useState(500);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [numInfants, setNumInfants] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [numAdults, setNumAdults] = useState(0);
    const [numPets, setNumPets] = useState(0);
    const onLocationClicked = () => {
        setShowLocation(true);
        setShowDates(false);
        setShowGuests(false);
        setOptionsWidth(500);
    };
    const onDatesClicked = () => {
        setShowLocation(false);
        setShowDates(true);
        setShowGuests(false);
        setOptionsWidth(400);
    };
    const onGuestsClicked = () => {
        setShowLocation(false);
        setShowDates(false);
        setShowGuests(true);
        setOptionsWidth(350);
    };
    const onSearchClicked = () => {
        if (location === "Location" ||
            selectedStartDate === null || selectedEndDate === null ||
            numInfants + numChildren + numAdults + numPets === 0) {
            return;
        }
        setShowLocation(false);
        setShowDates(false);
        setShowGuests(false);
        getDocs(query(collection(firebaseDatabase, "properties"), where("province", "==", location))).then((snapshot) => {
            const propertiesQuery = [];
            snapshot.forEach((doc) => {
                propertiesQuery.push(new Property(
                    doc.data()["title"],
                    doc.data()["province"],
                    doc.data()["city"],
                    doc.data()["price"],
                    doc.data()["rating"],
                    doc.data()["img"]
                ));
            });
            setProperties(propertiesQuery);
            setShowLanguage(false);
            setShowNotifications(false);
            navigate("/");
        }).catch((error) => {});
    };
    const getMonthString = (index) => {
        switch (index) {
            case 0: return "Jan";
            case 1: return "Feb";
            case 2: return "Mar";
            case 3: return "Apr";
            case 4: return "May";
            case 5: return "Jun";
            case 6: return "Jul";
            case 7: return "Aug";
            case 8: return "Sep";
            case 9: return "Oct";
            case 10: return "Nov";
            case 11: return "Dec";
        }
    };
    const locationBtn = useRef(null);
    const updateLocation = () => {
        if (window.innerWidth <= 800) {
            if (location === "British Columbia") {
                locationBtn.current.textContent = "BC";
            } else if (location === "Ontario") {
                locationBtn.current.textContent = "ON";
            } else if (location === "Quebec") {
                locationBtn.current.textContent = "QC";
            }
        } else {
            locationBtn.current.textContent = translate(location);
        }
    };
    useEffect(() => {
        const language = localStorage.getItem("language");
        if (numInfants > 0 || numChildren > 0 || numAdults > 0 || numPets > 0) {
            const number = numInfants + numChildren + numAdults + numPets;
            if (number === 1) {
                setGuests("guest");
            } else {
                setGuests("guests");
            }
        } else {
            setGuests("Guests");
        }
        updateLocation();
        window.addEventListener("resize", updateLocation);
        return () => window.removeEventListener("resize", updateLocation);
    }, [numInfants, numChildren, numAdults, numPets, location]);
    return (
    <>
    <div className="search-bar-wrapper">
        <div className="search-bar">
            <div className="search-bar-options">
                <button className="search-bar-location-btn" ref={locationBtn} onClick={onLocationClicked}>
                    {translate(location)}
                </button>
                <div className="search-bar-divider" />
                <button className="search-bar-dates-btn" onClick={onDatesClicked}>
                    {selectedStartDate == null || selectedEndDate == null ? "Date" :
                        getMonthString(selectedStartDate.getMonth()) + " " + String(selectedStartDate.getDate()) + " - " +
                        getMonthString(selectedEndDate.getMonth()) + " " + String(selectedEndDate.getDate()) }
                </button>
                <div className="search-bar-divider" />
                <button className="search-bar-guests-btn" onClick={onGuestsClicked}>
                    {numInfants + numChildren + numAdults + numPets > 0 ? numInfants + numChildren + numAdults + numPets : ""} {translate(guests)}
                </button>
            </div>
            <button className="search-bar-search-btn" onClick={onSearchClicked}>
                <div className="search-bar-search-txt">
                    {translate("Search")}
                </div>
                <span class="search-bar-search-icon material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    </div>
    { showLocation || showDates || showGuests ?
        <SearchOptions setLocation={setLocation}
            showLocation={showLocation} showDates={showDates} showGuests={showGuests}
            optionsWidth={optionsWidth}
            selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate}
            selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate}
            numInfants={numInfants} setNumInfants={setNumInfants}
            numChildren={numChildren} setNumChildren={setNumChildren}
            numAdults={numAdults} setNumAdults={setNumAdults}
            numPets={numPets} setNumPets={setNumPets} /> : null }
    </>
    );
}

export default SearchBar;