import "./styles/SearchBar.css";

const SearchBar = ({ setShowLocation, setShowDates, setShowGuests }) => {
    const onLocationClicked = () => {
        setShowLocation(true);
        setShowDates(false);
        setShowGuests(false);
    };
    const onDatesClicked = () => {
        setShowLocation(false);
        setShowDates(true);
        setShowGuests(false);
    };
    const onGuestsClicked = () => {
        setShowLocation(false);
        setShowDates(false);
        setShowGuests(true);
    };
    const onSearchClicked = () => {
        setShowLocation(false);
        setShowDates(false);
        setShowGuests(false);
    };
    return (
    <div className="SearchBar-wrapper">
        <div className="SearchBar">
            <div className="SearchBar-options">
                <button className="SearchBar-location-btn" onClick={onLocationClicked}>
                    Location
                </button>
                <div className="SearchBar-divider"></div>
                <button className="SearchBar-dates-btn" onClick={onDatesClicked}>
                    Dates
                </button>
                <div className="SearchBar-divider"></div>
                <button className="SearchBar-guests-btn" onClick={onGuestsClicked}>
                    Guests
                </button>
            </div>
            <button className="SearchBar-search-btn" onClick={onSearchClicked}>
                <div className="SearchBar-search-txt">
                    Search
                </div>
                <span class="SearchBar-search-icon material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    </div>
    );
}

export default SearchBar;