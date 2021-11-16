import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: 'recipe-directory-590bc.firebaseapp.com',
    projectId: 'recipe-directory-590bc',
    storageBucket: 'recipe-directory-590bc.appspot.com',
    messagingSenderId: '792228999900',
    appId: '1:792228999900:web:94ffc58d3c64544ba33a19',
};

// init firebase - connect with the backend
firebase.initializeApp(firebaseConfig);

// init services - we use this to interact with firebase in the future
const projectFirestore = firebase.firestore();

export { projectFirestore };
