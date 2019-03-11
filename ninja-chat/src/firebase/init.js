import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD-d6gKxJSTnG_WyVJclG_YDU-16jHD3Cw",
  authDomain: "ninja-chat-dd3a0.firebaseapp.com",
  databaseURL: "https://ninja-chat-dd3a0.firebaseio.com",
  projectId: "ninja-chat-dd3a0",
  storageBucket: "ninja-chat-dd3a0.appspot.com",
  messagingSenderId: "218713508470"
};
const firebaseApp = firebase.initializeApp(config);
//firebaseApp.firestore().settings( { timestampsInSnapshots: true })

export default firebaseApp.firestore()
