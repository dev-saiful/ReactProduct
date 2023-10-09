import React, { useState } from "react";
import Product from "./components/Product"
import  data  from "./data";


const App = () => {

const [products,setProduct] = useState(data);

  return(
    <div>
     <Product productsData={products}></Product>
    </div>
  );
};

export default App;
