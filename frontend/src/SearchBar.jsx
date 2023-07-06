import "./styles/SearchBar.css";

const SearchBar = () => {
    return (
    <div className="SearchBar-wrapper">
        <div className="SearchBar">
            <div className="SearchBar-options">
                <button className="SearchBar-location-btn">
                    Location
                </button>
                <div className="SearchBar-divider"></div>
                <button className="SearchBar-dates-btn">
                    Dates
                </button>
                <div className="SearchBar-divider"></div>
                <button className="SearchBar-guests-btn">
                    Guests
                </button>
            </div>
            <button className="SearchBar-search-btn">
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