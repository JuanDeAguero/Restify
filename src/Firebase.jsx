import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC-eVHnV9i3CyD50Ux0NkfaQUuEkYdIpc4",
    authDomain: "rest-ify.firebaseapp.com",
    projectId: "rest-ify",
    storageBucket: "rest-ify.appspot.com",
    messagingSenderId: "987783862999",
    appId: "1:987783862999:web:425e0b7bdc5602ab14ee92"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;