import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './stateViriable'
import Card from './components/myCards'

function App() {
  const [count, setCount] = useState(0)
  const favouriteCars = ["C63","Gusheshe","G63"];
  const computer = { brand: 'Apple',model: 'MacBook Pro',year: 2020,};

  // localStorage.setItem("myCat", "Tom");
     localStorage.setItem("isPayed",true)
     localStorage.setItem("favouriteCars",JSON.stringify(favouriteCars));
     localStorage.setItem("computer",JSON.stringify(computer))
     localStorage.setItem("age",24)
     return (
    <>
    <Card/>
    <State/>
{/* boolesan
    list
    object
    number
    string */}
    </>
  )
}

export default App
