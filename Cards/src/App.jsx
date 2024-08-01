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

  let house = {url: "https://media.istockphoto.com/id/1516938158/photo/3d-render-of-forest-house-with-large-windows-at-night.jpg?s=1024x1024&w=is&k=20&c=5PDIlJWllBu4cM0EGckn6exbw1FLdqXstecQbSSdzJg=",
                type:"DETACHED House",
                age:5,
                price:"$750,000",
                address:"742 Evergreen Terrace",
                bedRooms:"three",
                bathRooms:"2",
                relter : {img:"", Name:"Tiffany ",cellPhone:(555)-555-4321}

  }

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
