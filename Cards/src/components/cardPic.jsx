import { useState } from "react";
import { CiHeart } from "react-icons/ci";


function Cardpic(){

    const [isLiked, setIsliked]  = useState(false);
    // const [iconColor, setIconColor] = useState("red")

    let iconColor = "red";

    function ChangeLike(){
       
        if(isLiked){
            console.log("liked");
            // isLiked = true;
            // iconColor ="red";

        };
        if(!isLiked){   
            console.log("unliked");
        //    isLiked = false 
            // iconColor = "white";
 
        }
    }
    return(
            <>
                <div className="Cardpic" 
                    style={{backgroundImage:`url(${require("../source/istockphoto-1516938158-1024x1024.jpg")})`}}>
                    {/* <span style={{color:iconColor}} id="Cardheart"></span> */}
                    <CiHeart onClick={ChangeLike} size={40} style={{color:iconColor,justifyContent:"end",marginTop: "5%",alignItems:"end",textAlign:"end",marginLeft:"75%"}} />
                    {/* <span className="filled"></span> */}
                </div>
            </>
    )
}export default Cardpic