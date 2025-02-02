import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './stateViriable'
import Card from './components/myCards'
import TestFunc from './components/testingFunc'
import NewJava from './components/newJavaScript'
import AddBook from './components/addBook'
import DisplayBook from './components/displayBooks'
import DeleteBook from './components/deleteBook'
import UpdateBook from './updateBook'

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

  let bookTable = [{id:"booksTable",
    ISBN:1343-212-233-554,
    TITTLE: "JackOfAllTrades1",
    NU_PG: 82,
    EDITION:"limited-Edition1",
    PUBLSH:"Andiswa",
    PRICE:"R421",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.ggUdsh7LpfPtjyFzh-XqCgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  },
  {id:"AuthersTable",
    ISBN:2143-212-233-554,
    TITTLE: "JackOfAllTrades2",
    NU_PG: 72,
    EDITION:"limited-Edition2",
    PUBLSH:"Andiswa",
    PRICE:"R521",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.ggUdsh7LpfPtjyFzh-XqCgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  },
  {id:"booksTable",
    ISBN:4543-212-233-554,
    TITTLE: "JackOfAllTrades3",
    NU_PG: 62,
    EDITION:"limited-Edition3",
    PUBLSH:"Andiswa",
    PRICE:"R621",
    FORMET:"A4",
    COVERDESIGN:"https://th.bing.com/th/id/OIP.ggUdsh7LpfPtjyFzh-XqCgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    RELEASE_DATE:"05/08/2024"
  }];
 
   localStorage.setItem("bookTable",JSON.stringify(bookTable));

  //  let pullingMyBook = JSON.parse(bookTable);
  //  console.log("trying to fetch",pullingMyBook)

   let houses = [{
                        url: "https://media.istockphoto.com/id/1470006282/photo/for-sale-real-estate-sign-in-front-of-new-house.webp?b=1&s=170667a&w=0&k=20&c=yBoP5dTQZsTf8ZiPehFAnb1AQHc0tsedvN6FRdVmy6Q=",
                        type:"DETACHED GREEN HOUSE",
                        age:5,
                        rand:"R1 850,000",
                        address:"742 Evergreen Terrace",
                        bedRooms:4,
                        bathRooms:2,
                        relter : {relferImg:"", relferName:"Tiffany Haffner ",relferCellPhone:"(555)-555-4321"}

                  },{
                            url: "https://plus.unsplash.com/premium_photo-1683147876693-ea495fbc6eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
                            type:"DETACHED BlUE HOUSE",
                            age:9,
                            rand:"R890,000",
                            address:"101 Evergreen Terrace",
                            bedRooms:6,
                            bathRooms:2,
                            relter : {relferImg:"", relferName:"Tiffany Heffner",relferCellPhone:"(0616863971)"}
            
                  },{
                            url: "https://images.unsplash.com/photo-1528863612123-ed0abc1cb1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
                            type:"DETACHED Grey HOUSE",
                            age:8,
                            rand:"R1 750,000",
                            address:"305 Evergreen Terrace",
                            bedRooms:6,
                            bathRooms:2,
                            relter : {relferImg:"", relferName:"Tiffany Heffner ",relferCellPhone:"(073)-8211-786"}
    
                  }];
                  // console.log("stuppid")


    let bookList = [];

  // localStorage.setItem("myCat", "Tom");
     localStorage.setItem("isPayed",true)
     localStorage.setItem("favouriteCars",JSON.stringify(favouriteCars));
     localStorage.setItem("computer",JSON.stringify(computer))
     localStorage.setItem("age",24)

     localStorage.setItem("houses",JSON.stringify(houses))

       let storedHouses = localStorage.getItem("houses");
      //  console.log("stored houses", storedHouses = localStorage.getItem("houses"))
       let cribs = JSON.parse(storedHouses);

      // console.log("new crib",cribs)
      const newHouse = {
        url: "https://example.com/new-house.jpg",
        type: "NEW HOUSE TYPE",
        age: 10,
        rand: "R1,000,000",
        address: "123 New Street",
        bedRooms: 4,
        bathRooms: 3,
        relter: { relferImg: "", relferName: "New Realtor", relferCellPhone: "(555)-555-1234" }
      };

// if (!cribs) {
//   cribs.push(newHouse);
//   console.log("newcrib",cribs)
//   localStorage.setItem("cribs", JSON.stringify(cribs));
// }

//  else {
//   console.log("lessgooo",cribs.pop(newHouse))
//   console.error("No houses found in local storage.");
// }
// console.log("local storage now", localStorage.setItem("cribs", JSON.stringify(cribs)))
// four func create, display,delete,update

const handleAdd = (newHouse) => {
  let localData = localStorage.getItem("HousesForSale");
  let houses = localData ? JSON.parse(localData) : [];

  // if(!Array.isArray(houses)){
  //   houses = [houses]
  // }
  if (houses &&!Array.isArray(houses)) {
    houses = [houses];
  }
  houses.push(newHouse)
    localStorage.setItem("HousesForSale", JSON.stringify(newHouse))
}
 handleAdd(newHouse)

function display(){

};
function deleting(){


}
function update(){
// delete and create
}
 let Abook = {};



     return (
    <>
   <div style={{display:"flex",height:"90%"}}>
        <Card accomodation={house}/>
        <Card  accomodation={houses[0]}/>
        <Card accomodation={houses[1]}/>
        <Card accomodation={houses[2]}/>
   </div>
    <State/>
    <TestFunc/>
    <NewJava/>
    <AddBook book={bookTable[0]}/>
    <DisplayBook/>
    <DeleteBook/>
    <UpdateBook/>

    </>
  )
}

export default App
