import Cardpic from "./cardPic";
import Cardprice from "./cardPrice";
import Cardrooms from "./cardRooms";
import Cardcontacts from "./cardContacts";

function Card(){
   
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
            <Cardpic/>
            <Cardprice/>
            <Cardrooms/>
            <Cardcontacts/>
        </div>
        </>
    )
}export default Card;