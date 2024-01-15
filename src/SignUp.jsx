import "./styles/SignUp.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import firebaseDatabase from "./Database";
import translate from "./Translate";

const SignUp = ({ language }) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const onSignUpClicked = () => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!validEmail) {
            alert("Invalid email.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        if (password != retypePassword) {
            alert("Passwords don't match.");
            return;
        }
        createUserWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
            setDoc(doc(firebaseDatabase, "users", userCredential.user.uid), {
                first_name: firstName,
                last_name: lastName
              }).then(() => {
                navigate("/");
              }).catch((error) => {});
        }).catch((error) => {
            alert("Invalid user.");
        });
    };
    return (
    <div className="sign-up-wrapper">
        <div className="sign-up">
            <div className="sign-up-title"> {translate("Sign Up", language)} </div>
            <input className="sign-up-first-name" placeholder={translate("First Name", language)} onChange={(e) => setFirstName(e.target.value)} />
            <input className="sign-up-last-name" placeholder={translate("Last Name", language)} onChange={(e) => setLastName(e.target.value)} />
            <input className="sign-up-email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="sign-up-password" placeholder={translate("Password", language)} type="password" onChange={(e) => setPassword(e.target.value)} />
            <input className="sign-up-retype-password" placeholder={translate("Retype Password", language)} type="password" onChange={(e) => setRetypePassword(e.target.value)} />
            <button className="sign-up-btn" onClick={onSignUpClicked}> {translate("SIGN UP", language)} </button>
        </div>
    </div>
    );
}

export default SignUp;