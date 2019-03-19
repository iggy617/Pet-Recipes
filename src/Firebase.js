import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDIauqIFwcPVnJWe7h7fMzurnM7QiDEm-o",
    authDomain: "petrecipes-e9b9a.firebaseapp.com",
    databaseURL: "https://petrecipes-e9b9a.firebaseio.com",
    projectId: "petrecipes-e9b9a",
    storageBucket: "petrecipes-e9b9a.appspot.com",
    messagingSenderId: "408270150403"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;