import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWva0sf2YNwZd7HpiuNkuceuTaYZlwIsg",
  authDomain: "reactweeat.firebaseapp.com",
  databaseURL: "https://reactweeat.firebaseio.com",
  projectId: "reactweeat",
  storageBucket: "reactweeat.appspot.com",
  messagingSenderId: "415695902872",
  appId: "1:415695902872:web:3df2023388c86795"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
