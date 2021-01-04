import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import { App } from './app';
// import firebase from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'

const config = {
    apiKey: "AIzaSyCaYGHT9BFwZLOrpgWS1eHsuN6IwC81918",
    authDomain: "project-netflik.firebaseapp.com",
    projectId: "project-netflik",
    storageBucket: "project-netflik.appspot.com",
    messagingSenderId: "427449280605",
    appId: "1:427449280605:web:3e1229268202b206a105b4"
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
