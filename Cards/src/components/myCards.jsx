import Cardpic from "./cardPic";
import Cardprice from "./cardPrice";
import Cardrooms from "./cardRooms";
import Cardcontacts from "./cardContacts";

function Card({accomodation}){

    return(
        <>
        <div className="Card">
            <Cardpic top ={accomodation} />
            <Cardprice top2 = {accomodation} />
            <Cardrooms top3 = {accomodation}/>
            <Cardcontacts top4 ={accomodation}/>
        </div>
        </>
        
    )
}export default Card;