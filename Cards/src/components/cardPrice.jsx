function Cardprice({top2}){
    // console.log(top2.rand)
    return(
        <>
             <div className="Cardprice">
                <br />
                <h5 style={{color:"grey"}}>{} <span className="mdi--dot"></span>5Y OLD</h5>
                <h2 style={{color:"black"}}>{top2.rand}</h2>
                <h6 style={{color:"grey"}}>{top2.address}</h6>
            </div>
        </>
    )
}export default Cardprice