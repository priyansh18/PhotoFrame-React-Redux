import * as firebase from "firebase";
import "firebase/database";
var config = {
  apiKey: "AIzaSyAVDJwC78ELk5fVkTn2ZrhuVu3AMJfs_Wo",
  authDomain: "photoframe-897c0.firebaseapp.com",
  databaseURL: "https://photoframe-897c0.firebaseio.com",
  projectId: "photoframe-897c0",
  storageBucket: "photoframe-897c0.appspot.com",
  messagingSenderId: "609067046182",
  appId: "1:609067046182:web:b7bbc2006b2c3634a9dde7",
  measurementId: "G-938YCYVW9P",
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
