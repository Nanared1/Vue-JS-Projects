import firebase from 'firebase';
import firestore from 'firebase/firestore';


var config = {
  apiKey: "AIzaSyBsUYKHhxUUO8Zj77lx6pUtdQjOzcVearY",
  authDomain: "ninja-geos.firebaseapp.com",
  databaseURL: "https://ninja-geos.firebaseio.com",
  projectId: "ninja-geos",
  storageBucket: "ninja-geos.appspot.com",
  messagingSenderId: "815967179210"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
