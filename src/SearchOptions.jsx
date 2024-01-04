import "./styles/Dates.css";
import "./styles/Location.css";
import "./styles/SearchOptions.css";
import { useEffect, useState, useRef } from "react";

const Location = ({ setLocation }) => {
    const onONClicked = () => {
        setLocation("ON");
    };
    const onQCClicked = () => {
        setLocation("QC");
    };
    const onBCClicked = () => {
        setLocation("BC");
    };
    return (
    <div className="location">
        <div className="location-canada">
            <img
                className="location-canada-img"
                src={process.env.PUBLIC_URL + "/imgs/canada.png"}
                alt="canada">
            </img>
            <button className="location-province location-ON" onClick={onONClicked}>
                ON
            </button>
            <button className="location-province location-QC" onClick={onQCClicked}>
                QC
            </button>
            <button className="location-province location-BC" onClick={onBCClicked}>
                BC
            </button>
        </div>
    </div>
    );
}

const Dates = ({ selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate }) => {
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
    return (
        <div className="dates">
            <div className="dates-month-navigation">
                <button onClick={decrementMonth}>&lt;</button>
                <span className="dates-month">
                    {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
                </span>
                <button onClick={incrementMonth}>&gt;</button>
            </div>
            <div className="dates-weekdays">
                {days.map((day, index) => (
                    <div key={index} className="dates-weekday">{day}</div>
                ))}
            </div>
            <div className="dates-days">
                {calendarDays}
            </div>
        </div>
    );
};

const Guests = () => {
    return (
    <div className="guests">
        Guests
    </div>
    );
}

const SearchOptions = ({ setLocation, showLocation, showDates, showGuests, optionsWidth, selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate }) => {
    const options = useRef(null);
    const updateWidth = () => {
        if (window.innerWidth <= 700) {
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
            { showDates ? <Dates selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate} selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate} /> : null }
            { showGuests ? <Guests /> : null }
        </div>
    </div>
    );
}

export default SearchOptions;