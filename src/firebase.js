import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCAfcW8VTQ1YGqXfLfneOnMAp-wk-qBAt4",
  authDomain: "mamoru-slack-clone.firebaseapp.com",
  databaseURL: "https://mamoru-slack-clone.firebaseio.com",
  projectId: "mamoru-slack-clone",
  storageBucket: "mamoru-slack-clone.appspot.com",
  messagingSenderId: "350252233522"
};
firebase.initializeApp(config);

export default firebase;