import { useState ,useContext} from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/UseOnline";
import userContext from "../utils/userContext";




const Title = () => (
   
    <a href=""><img className="h-28 p-2" src={Logo} alt="logo" />
        </a>  );
 
 const Header = () => {
   const [isLoggedIn,setIsLoggedIn] = useState(false);
   const isOnline = useOnline();


   const {user} = useContext(userContext);

   return(
         <div className="flex justify-between bg-pink-200 shadow-lg">
             <Title/>
             
             <div className="nav-item">
              <ul className="flex py-10">
                <Link to="/">
                 <li className="px-2">Home</li></Link>

                 <Link to="/about"><li className="px-2">About</li></Link>
                 <Link to="/Contacts"><li className="px-2" >Contact</li></Link>
                 <Link to="/Instamart"><li className="px-2">Instamart</li></Link>
                 
                 <li className="px-2"   >cart</li>
              </ul>
             </div>
             <h1>{isOnline ?"green" : "red" }</h1>
            <h1 className=" p-10 font-bold text-red-900"> {user.name}</h1>
             {
                isLoggedIn ? (<button onClick={() =>setIsLoggedIn(false)}>LogOut</button>
                ) : ( 
                <button onClick={() =>setIsLoggedIn(true)}>Login</button>)
             }
            
             
         </div>
     );
 };
 export default Header;