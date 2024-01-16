import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseDatabase from "./Database";
import Language from "./Language";
import Login from "./Login";
import Nav from "./Nav";
import Notifications from "./Notifications";
import Property from "./Property";
import PropertyList from "./Properties";
import SearchBar from "./SearchBar";
import SignUp from "./SignUp";
import User from "./User";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [properties, setProperties] = useState([]);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    useEffect(() => {
        const item = localStorage.getItem("language");
        if (item === null || item === "") {
            localStorage.setItem("language", "en");
        }
        const authChanged = onAuthStateChanged(getAuth(), (user) => {
            setCurrentUser(user);
        });
        getDocs(query(collection(firebaseDatabase, "properties"))).then((snapshot) => {
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
        }).catch((error) => {});
        return () => authChanged();
    }, []);
    return (
    <Router>
        <Nav currentUser={currentUser}
            showLanguage={showLanguage} setShowLanguage={setShowLanguage}
            showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
        {showLanguage ? <Language setShowLanguage={setShowLanguage} /> : null}
        {showNotifications ? <Notifications setShowNotifications={setShowNotifications} /> : null}
        <SearchBar setProperties={setProperties} showLanguage={showLanguage} setShowLanguage={setShowLanguage} setShowNotifications={setShowNotifications} />
        <Routes>
            <Route path="/" element={<PropertyList properties={properties} />} />
            <Route path="/user" element={<User currentUser={currentUser} />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/signup" element={<SignUp />} />
        </Routes>
    </Router>
    );
}

export default App;