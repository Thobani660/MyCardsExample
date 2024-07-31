function Cardpic(){
    return(
            <>
                <div className="Cardpic" 
                    style={{backgroundImage:`url(${require("../source/istockphoto-1516938158-1024x1024.jpg")})`}}>
                    <span id="Cardheart" onClick={{myFunction}}></span>
                    {/* <span className="filled"></span> */}
                </div>
            </>
    )
}export default Cardpic