import { useState } from "react";





const Product = ({ img, name, price, explain }) => {
const [heart,setHeart]=useState(false);

    const handleHeart=()=>{
      setHeart(!heart);
    }
    return (
        <div className="product">
            <img src={img} alt={name} />
            <h4 className="">{name}</h4>
            <h5 className="" ><mark className="mark">$ {price}</mark> </h5>
            <p className="">{explain}</p>
            <div className="icon">
                 <i class={heart?"fa-solid fa-heart heart":"fa-regular fa-heart "} onClick={handleHeart}></i>
                
            </div>
           
        </div>
    );
}

export default Product;