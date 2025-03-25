import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import {Link, useNavigate} from "react-router-dom";
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin}) {
    const [menu,setMenu]=useState("menu");
    const [isSearchAvailable,setIsSearchAvailable]=useState(false);
    const [searchInput,setSearchInput]=useState("");
    const [isMenu,setIsMenu]=useState(true);
    const {getTotalAmount}=useContext(StoreContext);
    const navigate=useNavigate();
    const clickHandler=()=>{
      setIsMenu(prev=>!prev)
      setIsSearchAvailable(prev=>!prev)
    }
    const searchInputHandler=(e)=>{
      console.log(e.target.value)
      setSearchInput(e.target.value)
    }
    const searchHandler=(e)=>{
      e.preventDefault();
      if (searchInput.trim() !== "") {
        navigate(`/search/${searchInput}`);
    } else {
        console.log("Search input is empty! Not navigating.");
    }
    }
  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="logo" className="logo" /></Link>
      {isMenu?<ul className='navbar-menu'>
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
      </ul>:""}
      <div className="navbar-right">
        {isSearchAvailable &&
        <form onSubmit={searchHandler}> <input className="search-field" 
        value={searchInput} 
        onChange={searchInputHandler} 
        type="text" 
         placeholder="search"/></form>
         }
        <img onClick={clickHandler} src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
