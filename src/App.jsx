import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { initializeApp} from "firebase/app";
import {
  getFirestore, collection, getDocs,addDoc
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3t_Ogvh1Ld28nijFOVLsL5LQ4lcg3eLE",
  authDomain: "project1-b26cd.firebaseapp.com",
  projectId: "project1-b26cd",
  storageBucket: "project1-b26cd.appspot.com",
  messagingSenderId: "726758371591",
  appId: "1:726758371591:web:5bc7d68ac9b7f7365995a2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'books');

// try{
//   const docRef = await addDoc(collection(db,'users'),{
//     first: "Daniel",
//     last: "Lovelace",
//   });
// } catch(e){
//   console.error(e);
// }



function App() {
  const [books, setBooks] = useState([]);
  console.log(books)

  useEffect(()=>{
    const snapShot = async ()=>{
      const data = await getDocs(collection(db, 'books'));
      data.forEach(item=>console.log(item.data()))
      data.forEach(item=>console.log(item.id));
    }
    snapShot();
      
  },[]);

  return (
    <div className="App">
     </div>
  )
}

export default App
