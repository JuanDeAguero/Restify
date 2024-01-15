import "./styles/Dates.css";
import "./styles/Guests.css";
import "./styles/Location.css";
import "./styles/SearchOptions.css";
import { useEffect, useState, useRef } from "react";
import translate from "./Translate";

const Location = ({ setLocation }) => {
    const onONClicked = () => {
        setLocation("Ontario");
    };
    const onQCClicked = () => {
        setLocation("Quebec");
    };
    const onBCClicked = () => {
        setLocation("British Columbia");
    };
    return (
    <div className="location">
        <div className="location-canada">
            <img className="location-canada-img" src={process.env.PUBLIC_URL + "/imgs/canada.png"} alt="canada" />
            <button className="location-province location-ON" onClick={onONClicked}>ON</button>
            <button className="location-province location-QC" onClick={onQCClicked}>QC</button>
            <button className="location-province location-BC" onClick={onBCClicked}>BC</button>
        </div>
    </div>
    );
}

const Dates = ({ selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate, language }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
    const calendarDays = [];
    const incrementMonth = () => {
        setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
        if (currentMonth === 11) setCurrentYear(currentYear + 1);
    };
    const decrementMonth = () => {
        setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
        if (currentMonth === 0) setCurrentYear(currentYear - 1);
    };
    const isDateInRange = (day) => {
        const date = new Date(currentYear, currentMonth, day);
        return selectedStartDate && selectedEndDate && date >= selectedStartDate && date <= selectedEndDate;
    };
    const handleDayClick = (day, isCurrentMonth) => {
        if (!isCurrentMonth) return;
        const newDate = new Date(currentYear, currentMonth, day);
        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
            setSelectedStartDate(newDate);
            setSelectedEndDate(null);
        } else if (newDate < selectedStartDate) {
            setSelectedEndDate(selectedStartDate);
            setSelectedStartDate(newDate);
        } else {
            setSelectedEndDate(newDate);
        }
    };
    for (let i = 0; i < firstDay; i++) {
        const day = daysInPreviousMonth - firstDay + i + 1;
        calendarDays.push(<div key={`prev-${i}`} className="dates-day dates-out-of-month">{day}</div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        const inRange = isDateInRange(day);
        const isSelected = date.getTime() === selectedStartDate?.getTime() || date.getTime() === selectedEndDate?.getTime();
        calendarDays.push(
            <div
                key={day}
                className={`dates-day ${isSelected ? "dates-selected" : ""} ${inRange && !isSelected ? "dates-in-range" : ""}`}
                onClick={() => handleDayClick(day, true)}>
                {day}
            </div>
        );
    }
    const totalCells = 42;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let i = 1; i <= remainingCells; i++) {
        calendarDays.push(<div key={`next-${i}`} className="dates-day dates-out-of-month">{i}</div>);
    }
    const getMonthString = (index) => {
        switch (index) {
            case 0: return translate("January", language);
            case 1: return translate("February", language);
            case 2: return translate("March", language);
            case 3: return translate("April", language);
            case 4: return translate("May", language);
            case 5: return translate("June", language);
            case 6: return translate("July", language);
            case 7: return translate("August", language);
            case 8: return translate("September", language);
            case 9: return translate("October", language);
            case 10: return translate("November", language);
            case 11: return translate("December", language);
        }
    };
    return (
        <div className="dates">
            <div className="dates-month-navigation">
                <button onClick={decrementMonth}>&lt;</button>
                <span className="dates-month">
                    {getMonthString(new Date(currentYear, currentMonth).getMonth())} {currentYear}
                </span>
                <button onClick={incrementMonth}>&gt;</button>
            </div>
            <div className="dates-weekdays">
                {days.map((day, index) => (
                    <div key={index} className="dates-weekday">{day}</div>
                ))}
            </div>
            <div className="dates-days">{calendarDays}</div>
        </div>
    );
};

const Guests = ({ numInfants, setNumInfants, numChildren, setNumChildren, numAdults, setNumAdults, numPets, setNumPets, language }) => {
    return (
    <div className="guests">
        <div className="guests-row">
            <div> {translate("Infants", language)} </div>
            <div className="guests-row-right">
                <button className="guests-button" onClick={() => { if (numInfants > 0) setNumInfants(numInfants - 1) }}>-</button>
                <div className="guests-number">{numInfants}</div>
                <button className="guests-button" onClick={() => { if (numInfants < 5) setNumInfants(numInfants + 1) }}>+</button>
            </div>
        </div>
        <div className="guests-row">
            <div> {translate("Children", language)} </div>
            <div className="guests-row-right">
                <button className="guests-button" onClick={() => { if (numChildren > 0) setNumChildren(numChildren - 1) }}>-</button>
                <div className="guests-number">{numChildren}</div>
                <button className="guests-button" onClick={() => { if (numChildren < 5) setNumChildren(numChildren + 1) }}>+</button>
            </div>
        </div>
        <div className="guests-row">
            <div> {translate("Adults", language)} </div>
            <div className="guests-row-right">
                <button className="guests-button" onClick={() => { if (numAdults > 0) setNumAdults(numAdults - 1) }}>-</button>
                <div className="guests-number">{numAdults}</div>
                <button className="guests-button" onClick={() => { if (numAdults < 5) setNumAdults(numAdults + 1) }}>+</button>
            </div>
        </div>
        <div className="guests-row">
            <div> {translate("Pets", language)} </div>
            <div className="guests-row-right">
                <button className="guests-button"
                    onClick={() => { if (numPets > 0) setNumPets(numPets - 1) }}>
                    -
                </button>
                <div className="guests-number">
                    {numPets}
                </div>
                <button className="guests-button"
                    onClick={() => { if (numPets < 5) setNumPets(numPets + 1) }}>
                    +
                </button>
            </div>
        </div>
    </div>
    );
}

const SearchOptions = ({
    setLocation, showLocation, showDates, showGuests, optionsWidth,
    selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate,
    numInfants, setNumInfants, numChildren, setNumChildren, numAdults, setNumAdults, numPets, setNumPets
}) => {
    const options = useRef(null);
    const updateWidth = () => {
        if (window.innerWidth <= 800) {
            options.current.style.width = "100%";
        } else {
            options.current.style.width = String(optionsWidth) + "px";
        }
    };
    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [optionsWidth]);
    return (
    <div className="search-options-wrapper">
        <div className="search-options" ref={options}>
            { showLocation ? <Location setLocation={setLocation} /> : null }
            { showDates ? <Dates selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate}
                selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate} /> : null }
            { showGuests ? <Guests numInfants={numInfants} setNumInfants={setNumInfants}
                numChildren={numChildren} setNumChildren={setNumChildren}
                numAdults={numAdults} setNumAdults={setNumAdults}
                numPets={numPets} setNumPets={setNumPets} /> : null }
        </div>
    </div>
    );
}

export default SearchOptions;