import "./styles/User.css";
import { doc, getDoc, query } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseDatabase from "./Database";
import translate from "./Translate";

const User = ({ currentUser }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const onSignOutClicked = () => {
        signOut(getAuth()).then(() => {
            navigate("/");
        }).catch((error) => {});
    };
    useEffect(() => {
        if (!currentUser) {
            return;
        }
        const docRef = doc(firebaseDatabase, "users", currentUser.uid);
        getDoc(docRef).then((docSnapshot) => {
            setFirstName(docSnapshot.data()["first_name"]);
            setLastName(docSnapshot.data()["last_name"]);
        }).catch((error) => {});
    }, [currentUser]);
    return (
    <div className="user">
        <div className="user-name">{firstName} {lastName}</div>
        <div className="user-img" />
        <button className="user-sign-out" onClick={onSignOutClicked}>{translate("Sign out")}</button>
    </div>
    );
}

export default User;