function Card(){
    return(
        <>
        <div className="Card">
        
            <div className="Cardpic">
            <span class="Cardheart"></span>
            </div>
            <div className="Cardprice">
                <br />
                <h5>DETACHED HOUSE + 5Y OLD</h5>
                <h2>$750,00</h2>
                <h6>742 Evergreen terrace</h6>
            </div>
            <div className="Cardrooms">
                <div><span class="solar--bed-line-duotone"></span>3Bedrooms</div>
                <div><span class="cil--bathroom"></span>2 Bathrooms</div>
            </div>
            <div className="Cardcontacts">
                <h4>HEALTOR</h4>
                <div className="Cont">
                <div className="Contactspic"></div>
                <div className="contactDetails">
                    <h4>Tiffany Heffiner</h4>
                    <h6>(555) 555-4321</h6>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}export default Card;