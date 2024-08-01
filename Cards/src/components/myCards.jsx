import Cardpic from "./cardPic";
import Cardprice from "./cardPrice";
import Cardrooms from "./cardRooms";
import Cardcontacts from "./cardContacts";

function Card({accomodation},{houses}){
    // console.log("there" ,houses)
    // console.log(accomodation.url);
    // console.log(accomodation.age);
    // console.log(accomodation.price);
    // console.log(accomodation.address);
    // console.log(accomodation.bedRooms);
    // console.log(accomodation.bathRooms);
    // console.log(accomodation.relter.relferName);
    // console.log(accomodation.relter.relferCellphone);
    // console.log(accomodation.relter.relterImg);




   
//   function Filled(){
//     document.getElementsByClassName("solar--heart-bold").innerHTM = " World";
//   }Filled()

// function changeBackgroundColor() {
//     document.getElementById("Cardheart").innerHTML.style.backgroundColor = "lightblue";
//  }
//  changeBackgroundColor()

// function myFunction() {
//     document.getElementById("Cardheart").style.display = "none";
//   }

        // console.log("Light theme attract bugs")
    return(
        <>
        <div className="Card">
            <Cardpic top ={accomodation.houses} />
            <Cardprice top2 = {accomodation.houses} />
            <Cardrooms top3 ={accomodation.houses}/>
            <Cardcontacts top4 ={accomodation.houses}/>
        </div>
        </>
        
    )
}export default Card;