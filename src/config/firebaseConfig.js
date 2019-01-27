import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 var config = {
    apiKey: "AIzaSyD_Cc_jFLPlmR-IV723-E-ci46zxpL-dbY",
    authDomain: "free-db-ddc27.firebaseapp.com",
    databaseURL: "https://free-db-ddc27.firebaseio.com",
    projectId: "free-db-ddc27",
    storageBucket: "free-db-ddc27.appspot.com",
    messagingSenderId: "296627713697"
  };
 firebase.initializeApp(config);
 firebase.firestore().settings({timestampsInSnapshots: true})

 export default firebase
