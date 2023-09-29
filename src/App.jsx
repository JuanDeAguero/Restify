import { useState } from "react";
import Language from "./Language";
import Nav from "./Nav";
import Notifications from "./Notifications";
import PropertyList from "./PropertyList";
import SearchBar from "./SearchBar";
import SearchDetails from "./SearchDetails";

const App = () => {
    const [showLocation, setShowLocation] = useState(false);
    const [showDates, setShowDates] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    return (
    <>
        <Nav showLanguage={showLanguage} setShowLanguage={setShowLanguage} />
        {showLanguage ? <Language setShowLanguage={setShowLanguage} /> : null}
        <Notifications />
        <SearchBar
            setShowLocation={setShowLocation}
            setShowDates={setShowDates}
            setShowGuests={setShowGuests} />
        <SearchDetails
            showLocation={showLocation}
            showDates={showDates}
            showGuests={showGuests}
            setShowLocation={setShowLocation}
            setShowDates={setShowDates}
            setShowGuests={setShowGuests} />
        <PropertyList />
    </>
    );
}

export default App;