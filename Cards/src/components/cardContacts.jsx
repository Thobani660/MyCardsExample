function Cardcontacts({top4}){
    // console.log( top4.relter)
    return(
        <>
            <div className="Cardcontacts">
                <h4 style={{color:"grey",marginLeft:"15px"}}>REALTOR</h4>
                <div className="Cont">
                    <div className="Contactspic"></div>
                    <div className="contactDetails">
                        <h4 style={{color:"black"}}>{ top4.relter.relferName}</h4>
                        <h6 style={{color:"grey"}}>{top4.relter.relferCellPhone}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}export default Cardcontacts