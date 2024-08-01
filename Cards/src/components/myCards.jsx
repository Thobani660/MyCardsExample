import Cardpic from "./cardPic";
import Cardprice from "./cardPrice";
import Cardrooms from "./cardRooms";
import Cardcontacts from "./cardContacts";

function Card({accomodation}){
    console.log(accomodation.url);
    console.log(accomodation.age);
    console.log(accomodation.price);
    console.log(accomodation.address);
    console.log(accomodation.bedRooms);
    console.log(accomodation.bathRooms);
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
            <Cardpic url={accomodation.url}/>
            <Cardprice price={accomodation.address} />
            <Cardrooms/>
            <Cardcontacts/>
        </div>
        </>
        
    )
}export default Card;