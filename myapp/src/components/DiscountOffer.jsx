import { useEffect, useState } from "react";

function GetRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}




function DiscountOffer() {
    const [offerPrice, setOfferPrice] = useState(GetRandomNumber());
    const [isChecked, setIsChecked] = useState(false);

    function HandleCheck(e) {
        setIsChecked(e);
    }

    useEffect(() => {
        if (!isChecked) return;

        const timer = setInterval(() => {
            setOfferPrice(GetRandomNumber());
        }, 1000);

        return () => clearInterval(timer);
    }, [isChecked]);

    return (<>
        <input type="checkbox" checked={isChecked} onChange={(e) => HandleCheck(e.target.checked)} /> Show Offer Price

        <br /><br /><br />

        <div className="offer">
            <h2>Get Discount on your first purchase!</h2>
        </div>

        <p>Offer Price  : <b>{offerPrice}</b></p>

    </>)

}

export default DiscountOffer;
