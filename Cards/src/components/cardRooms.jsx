import { IoBedOutline } from "react-icons/io5";

function Cardrooms(){
    
    return(
        <>
            <div className="Cardrooms">
                <div style={{color:"grey",display:"flex"}}><IoBedOutline size={30} />
                <h3 style={{color:"black",marginLeft:"2%"}}>3</h3><h5 style={{marginLeft:"6px",marginTop:"5px"}}>Bedrooms</h5></div>
                <div style={{color:"grey",display:"flex"}}><span class="mdi--bathroom"></span><span className="cil--bathroom" style={{marginRight:"10px"}}></span><h5 style={{color:"black"}}>2</h5><h5 > Bathrooms</h5></div>
            </div>
            
           
        </>
    )
}export default Cardrooms