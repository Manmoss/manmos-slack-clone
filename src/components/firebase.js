import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var config = {
  apiKey: "AIzaSyAPMGHx7CiIb7WHCKfoxrB1gC6x8D4i8VE",
  authDomain: "manmos-slack-clone.firebaseapp.com",
  databaseURL: "https://manmos-slack-clone.firebaseio.com",
  projectId: "manmos-slack-clone",
  storageBucket: "manmos-slack-clone.appspot.com",
  messagingSenderId: "869802502321"
};
firebase.initializeApp(config);

export default firebase;