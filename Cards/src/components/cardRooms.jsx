import { IoBedOutline } from "react-icons/io5";

function Cardrooms(){
    
    return(
        <>
            <div className="Cardrooms">
                <div style={{color:"grey",display:"flex"}}><IoBedOutline size={30} />
                    <h3 style={{color:"black",
                    marginLeft:"2%"}}>3</h3><h5 
                    style={{marginLeft:"6px",
                    marginTop:"5px"}}>Bedrooms</h5>
                </div>
                <div style={{color:"grey",
                     display:"flex"}}><span className="mdi--bathroom" 
                     style={{marginRight:"10px"}}></span><h3 
                     style={{color:"black",marginRight:"5px",
                     marginLeft:"-10px"}}>2</h3><h5 
                     style={{marginTop:"5px"}}> Bathrooms</h5>
                </div>
            </div>
            
           
        </>
    )
}export default Cardrooms