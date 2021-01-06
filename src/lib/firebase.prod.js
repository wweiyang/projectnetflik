import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCaYGHT9BFwZLOrpgWS1eHsuN6IwC81918',
  authDomain: 'project-netflik.firebaseapp.com',
  projectId: 'project-netflik',
  storageBucket: 'project-netflik.appspot.com',
  messagingSenderId: '427449280605',
  appId: '1:427449280605:web:3e1229268202b206a105b4',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };