function Test(){

    let HousesForSale = [{
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

  const newcrib = {
    url: "https://example.com/new-house.jpg",
    type: "NEW HOUSE TYPE",
    age: 10,
    rand: "R1,000,000",
    address: "123 New Street",
    bedRooms: 4,
    bathRooms: 3,
    relter: { relferImg: "", relferName: "New Realtor", relferCellPhone: "(555)-555-1234" }
  };
 
  // function Create(HousesForSale){
  //   //  pulling the list from local storage
  //   localStorage.setItem("HousesForSale",JSON.stringify(HousesForSale));
  //   localStorage.getItem("HousesForSale");
  //   console.log("pulling the list from local storage",HousesForSale);
  // // pushing into the list
  //   HousesForSale.push(newcrib) ;
  //   // list returned into the localstorage
  //   localStorage.setItem("HousesForSale",JSON.stringify(HousesForSale));
  //   console.log("Returned list to local storage",HousesForSale);
  // }
  // // func recieving arguements
  // Create(newcrib);
  
  
  const handleAdd = (arr) => {
    let localData = localStorage.getItem("HousesForSale");
   let newcrib = localData ? JSON.parse(localData) : {};
   newcrib.push(arr)
    localStorage.setItem("HousesForSale", JSON.stringify(newcrib))
  }
   handleAdd(house)
  
  
  
  

// const addition = (event) =>{
//   const name = event.target.name;
//   const value = event.target.value;
//   setIsUsername(values => ({...values, [name] : value}));
//   localStorage.setItem("isUsername",JSON.stringify(isUsername
//   ))
// }
// if(isUsername){
// }
function add(event){
      // localStorage.setItem("isUsername", JSON.stringify(isUsername))
    event.preventDefault();
    console.log(`The name you entered was:`, isUsername)
 setIsUsername(isUsername)
  // isUsername.push(userNameData)
  // l
}

    return(
            <>
            <div style={{display:"grid"}} onSubmit={add}>
            <input type="text" name='username' required onChange={addition} defaultValue={isUsername.name} placeholder='username'/>
            <input type="password" name='password' onChange={addition} required defaultValue={isUsername.password} placeholder='password'/>
             <button style={{backgroundColor:"green"}} onClick={add}>Submit</button>
             <button style={{backgroundColor:"red"}}  >Delete</button>
            </div>
            </>
    )
}export default Test