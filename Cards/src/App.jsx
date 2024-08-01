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
                type:"DETACHED HOUSE",
                age:5,
                rand:"R750,000",
                address:"742 Evergreen Terrace",
                bedRooms:3,
                bathRooms:2,
                relter : {relferImg:"", relferName:"Tiffany ",relferCellPhone:"(555)-555-4321"}

  }
   let houses = [{
                        url: "https://media.istockphoto.com/id/1516938158/photo/3d-render-of-forest-house-with-large-windows-at-night.jpg?s=1024x1024&w=is&k=20&c=5PDIlJWllBu4cM0EGckn6exbw1FLdqXstecQbSSdzJg=",
                        type:"DETACHED GREEN HOUSE",
                        age:5,
                        rand:"R750,000",
                        address:"742 Evergreen Terrace",
                        bedRooms:3,
                        bathRooms:2,
                        relter : {relferImg:"", relferName:"Tiffany ",relferCellPhone:"(555)-555-4321"}

                  },{
                            url: "https://plus.unsplash.com/premium_photo-1683147876693-ea495fbc6eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
                            type:"DETACHED BlUE HOUSE",
                            age:5,
                            rand:"R890,000",
                            address:"101 Evergreen Terrace",
                            bedRooms:3,
                            bathRooms:2,
                            relter : {relferImg:"", relferName:"Tiffany ",relferCellPhone:"(555)-555-4321"}
            
                  },{
                            url: "https://images.unsplash.com/photo-1528863612123-ed0abc1cb1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
                            type:"DETACHED Grey HOUSE",
                            age:5,
                            rand:"R750,000",
                            address:"305 Evergreen Terrace",
                            bedRooms:3,
                            bathRooms:2,
                            relter : {relferImg:"", relferName:"Tiffany ",relferCellPhone:"(555)-555-4321"}
    
                  }];
                  console.log("stuppid")

  // localStorage.setItem("myCat", "Tom");
     localStorage.setItem("isPayed",true)
     localStorage.setItem("favouriteCars",JSON.stringify(favouriteCars));
     localStorage.setItem("computer",JSON.stringify(computer))
     localStorage.setItem("age",24)
     return (
    <>
   <div style={{display:"flex",height:"90%"}}>
        <Card accomodation={house}/>
        {/* <Card  houses={houses[0]}/>
        <Card houses={houses[1]}/>
        <Card houses={houses[2]}/> */}
   </div>
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
