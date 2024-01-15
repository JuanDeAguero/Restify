import { getFirestore } from "firebase/firestore";
import firebaseApp from "./Firebase";

const firebaseDatabase = getFirestore(firebaseApp);

export default firebaseDatabase;