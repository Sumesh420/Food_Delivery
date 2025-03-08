import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
export default function ExploreMenu({category,setCategory}) {
  return (
    <div className="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from diverse menu delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission to satisfy your cravings and elevate your dinning experience,and delicious meal at a time</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>(
            <div className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                <img className={item.menu_name===category?"active":""} src={item.menu_image} alt="item-img" />
                <p>{item.menu_name}</p>
            </div>
        ))}
      </div>
      <hr />
    </div>
  )
}
