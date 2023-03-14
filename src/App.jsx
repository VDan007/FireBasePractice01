import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { initializeApp} from "firebase/app";
import {
  getFirestore, collection, getDocs
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3t_Ogvh1Ld28nijFOVLsL5LQ4lcg3eLE",
  authDomain: "project1-b26cd.firebaseapp.com",
  projectId: "project1-b26cd",
  storageBucket: "project1-b26cd.appspot.com",
  messagingSenderId: "726758371591",
  appId: "1:726758371591:web:5bc7d68ac9b7f7365995a2"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'books');



function App() {
  const [books, setBooks] = useState([]);
  console.log(books)

  useEffect(()=>{
    getDocs(colRef)
    .then((snapshot) =>snapshot.docs.map(doc=>console.log(doc.data())))
      
  },[]);

  return (
    <div className="App">
     </div>
  )
}

export default App
