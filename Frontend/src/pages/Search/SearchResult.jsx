import React,{useContext} from 'react'
import "./SearchResult.css";
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'

export default function SearchResult() {
    const {searchInput}=useParams()
    const {food_list}=useContext(StoreContext)
    console.log(searchInput)
  return (
    <div className='search-display'>
      <h2>Search Results for "{searchInput}"</h2>
      <div className="search-display-list">
      {food_list.filter((item) => item.name.toLowerCase().includes(searchInput?.toLowerCase())).map((item,index)=>{
        
            return <FoodItem
            key={index}
            id={item._id} 
            description={item.description} 
            price={item.price}
            name={item.name}
            image={item.image} />
        
      })}
      </div>
    </div>
  )
}
