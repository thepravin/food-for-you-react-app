


export default function BillCart({name,price}){

    return(
        <>
            <div className="bill-items">
                
                    <h5>{name}</h5>
                    <p>  {price/100} Rs.</p>
                
            </div>

        </>
    )
}