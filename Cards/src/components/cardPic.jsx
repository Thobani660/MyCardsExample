import { useState } from "react";
import { CiHeart } from "react-icons/ci";


function Cardpic({accomodation}){

    const [isLiked, setIsliked]  = useState(false);
    // const [iconColor, setIconColor] = useState("red")
    
    
    let iconColor = isLiked ? 'red' : 'white';
    let filledHeart = isLiked ? 'red' : 'none';

    function ChangeLike(){
        setIsliked(!isLiked)
    }
        if(isLiked){
            console.log("liked");
            // isLiked = true;
            iconColor ="red";
            filledHeart = "red"

        };
        if(!isLiked){   
            console.log("unliked");
        //    isLiked = false 
            iconColor = "white";
            filledHeart = "white"
 
        }
        
    
    return(
            <>
                <div className="Cardpic" 
                    style={{backgroundImage:`url(${require("../source/istockphoto-1516938158-1024x1024.jpg")})`}}>
                    {/* <span style={{color:iconColor}} id="Cardheart"></span> */}
                    <CiHeart onClick={ChangeLike} size={40} style={{color:iconColor,fill:filledHeart,justifyContent:"end",marginTop: "5%",alignItems:"end",textAlign:"end",marginLeft:"75%"}} />
                    {/* <span className="filled"></span> */}
                </div>
            </>
    )
}export default Cardpic