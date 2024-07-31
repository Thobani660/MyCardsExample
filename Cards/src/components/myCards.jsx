function Card(){
   
//   function Filled(){
//     document.getElementsByClassName("solar--heart-bold").innerHTM = " World";
//   }Filled()
// function changeBackgroundColor() {
//     document.getElementById("Cardheart").innerHTML.style.backgroundColor = "lightblue";
//  }
//  changeBackgroundColor()

function myFunction() {
    document.getElementById("Cardheart").style.display = "none";
  }


    return(
        <>
        <div className="Card">
        
            <div className="Cardpic" style={{backgroundImage:`url(${require("../source/istockphoto-1516938158-1024x1024.jpg")})`}}>
            <span id="Cardheart" onClick={{myFunction}}></span>
            {/* <span className="filled"></span> */}
            </div>
            <div className="Cardprice">
                <br />
                <h5 style={{color:"grey"}}>DETACHED HOUSE <span class="mdi--dot"></span>5Y OLD</h5>
                <h2 style={{color:"black"}}> $750,00</h2>
                <h6 style={{color:"grey"}}>742 Evergreen terrace</h6>
            </div>
            <div className="Cardrooms">
                <div style={{color:"grey",display:"flex"}}><span className="solar--bed-line-duotone"></span><h5 style={{marginLeft:"10px"}}>3Bedrooms</h5></div>
                <div style={{color:"grey",display:"flex"}}><span className="cil--bathroom" style={{marginRight:"10px"}}></span><h5 >2 Bathrooms</h5></div>
            </div>
            <div className="Cardcontacts">
                <h4 style={{color:"grey",marginLeft:"15px"}}>HEALTOR</h4>
                <div className="Cont">
                <div className="Contactspic"></div>
                <div className="contactDetails">
                    <h4 >Tiffany Heffiner</h4>
                    <h6 style={{color:"grey"}}>(555) 555-4321</h6>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}export default Card;