import "./styles/Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import translate from "./Translate";

const Login = ({ language }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onLoginClicked = () => {
        signInWithEmailAndPassword(getAuth(), email, password).then((credential) => {
                const user = credential.user;
                navigate("/");
            }).catch((error) => {
                alert("User not found.");
            });
    };
    return (
    <div className="login-wrapper">
        <div className="login">
            <div className="login-title"> {translate("Login", language)} </div>
            <input className="login-email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
            <input className="login-password" placeholder={translate("Password", language)} type="password"
                onChange={(event) => setPassword(event.target.value)} />
            <button className="login-btn" onClick={onLoginClicked}> {translate("LOGIN", language)} </button>
            <Link to="/user/signup"> {translate("or sign up", language)} </Link>
        </div>
    </div>
    );
}

export default Login;