import { useState,useEffect} from "react";
import { FITCH_MENU_URL } from "../Constants";

const useRestaurant = (resId) =>{
    const [restaurant ,setRestaurant] = useState(null);
    useEffect(() =>{
        getRestaurantInfo();
    },  []);

    async function getRestaurantInfo() {
        const data = await fetch(
               FITCH_MENU_URL+resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
        }
         return restaurant;
};
export default useRestaurant;