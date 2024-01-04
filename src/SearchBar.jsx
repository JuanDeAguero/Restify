import "./styles/SearchBar.css";
import { useState } from "react";
import SearchOptions from "./SearchOptions";

const SearchBar = () => {
    const [location, setLocation] = useState("Location");
    const [showLocation, setShowLocation] = useState(false);
    const [showDates, setShowDates] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    const [optionsWidth, setOptionsWidth] = useState(500);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
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
        setShowLocation(false);
        setShowDates(false);
        setShowGuests(false);
    };
    return (
    <>
    <div className="search-bar-wrapper">
        <div className="search-bar">
            <div className="search-bar-options">
                <button className="search-bar-location-btn" onClick={onLocationClicked}>
                    {location}
                </button>
                <div className="search-bar-divider"></div>
                <button className="search-bar-dates-btn" onClick={onDatesClicked}>
                    {selectedStartDate == null || selectedEndDate == null ? "Date" :
                        String(selectedStartDate.getDate()) + " - " + String(selectedEndDate.getDate()) }
                </button>
                <div className="search-bar-divider"></div>
                <button className="search-bar-guests-btn" onClick={onGuestsClicked}>
                    Guests
                </button>
            </div>
            <button className="search-bar-search-btn" onClick={onSearchClicked}>
                <div className="search-bar-search-txt">
                    Search
                </div>
                <span class="search-bar-search-icon material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    </div>
    { showLocation || showDates || showGuests ?
        <SearchOptions setLocation={setLocation} showLocation={showLocation} showDates={showDates} showGuests={showGuests} optionsWidth={optionsWidth} selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate} selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate} /> : null }
    </>
    );
}

export default SearchBar;