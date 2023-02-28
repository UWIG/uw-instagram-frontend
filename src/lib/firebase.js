import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAm9oZbyhD7P_cSVLplWx4hSJZdkC3zcfw',

  authDomain: 'instagram-yt-7ca6a.firebaseapp.com',

  projectId: 'instagram-yt-7ca6a',

  storageBucket: 'instagram-yt-7ca6a.appspot.com',

  messagingSenderId: '606685789024',

  appId: '1:606685789024:web:1df1920f9286828b79fc05'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore; // firestore

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };
