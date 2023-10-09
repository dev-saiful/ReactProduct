import Card from "./Card";
function product({productsData})
{
    return(
        <div>
                <div className="text-center mt-5 mb-5">
                <h2>Product Listing App</h2>
            </div>
            {
                productsData.map((product)=>{
                    return <Card {...product}></Card>
                })
            }
    
        </div>
        
    );
}

export default product;