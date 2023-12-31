import {restaurantList} from "../Constants";
import RestaurantCard from "./RestaurantCard";
import {useState ,useEffect} from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/UseOnline";


const Body = ({user}) =>{
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filteredrestaurants,setFilteredRestaurants] = useState([]);  
  const [searchText,setSearchText] = useState("");

  useEffect(() =>{
      getRestaurants(); 
    },[]);

  async function getRestaurants(){
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9582858&lng=77.5343546&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }  

  const isOnline  = useOnline();
  // if (!isOnline){
  //   return <h1>offline please check your internet connection</h1>;
  // }
  // console.log("render()");
  if (!allRestaurants) return null ;
  
    return allRestaurants.length === 0?(<Shimmer/>) : (
      <>
      <div className="search-container p-5 bg-pink-50 my-5" >
        <input
         type="text" 
          className="focus:bg-green-400 p-2 m-2" 
          placeholder="Search"
           value={searchText}
           onChange={(e) => {
            setSearchText(e.target.value);
           }} 
           />
           
           :<button className="p-2 m-2 bg-purple-900 hover:bg-gray-900 text-white rounded-md"
           onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
           }}
           >
            Search
            </button>
      </div>
        <div className="flex flex-wrap ">
            
              {filteredrestaurants.map((restaurant) => {
                return (
                <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data}  user={user}/> </Link> 
             ) })}
        </div>
        </>
    );
};
export default Body;