import React, {useContext } from 'react'
import "./FoodItem.css"
import {assets} from "../../assets/assets.js"
import { StoreContext } from '../../context/StoreContext.js';
export default function FoodItem({id,description,price,name,image}) {
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="food-img" className="food-item-img" />
        {!cartItems[id]
        ?<img className="add" src={assets.add_icon_white} onClick={()=>{
          addToCart(id)

        }}/>
        :
        <div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="- icon" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="+ icon" />
        </div>
    }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" className="food-item-rating-img" />
        </div>
       <p className="food-item-desc">{description}</p>
       <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}
