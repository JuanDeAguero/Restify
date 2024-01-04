import { useState } from "react";
import Language from "./Language";
import Nav from "./Nav";
import Notifications from "./Notifications";
import PropertyList from "./Properties";
import SearchBar from "./SearchBar";

const App = () => {
    const [showLanguage, setShowLanguage] = useState(false);
    return (
    <>
        <Nav showLanguage={showLanguage} setShowLanguage={setShowLanguage} />
        {showLanguage ? <Language setShowLanguage={setShowLanguage} /> : null}
        <Notifications />
        <SearchBar />
        <PropertyList />
    </>
    );
}

export default App;