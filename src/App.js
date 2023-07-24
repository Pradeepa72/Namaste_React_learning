import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Contacts from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Instamart from "./components/instamart";

const AppLayout = () => {

   const [user ,setUser] = useState({
      name: "pradeepa",
      email:"pradeepapk02@gmail.com",
   });
    useEffect(() =>{
      
    })
   
        return(   
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
        );
    };

const appRouter = createBrowserRouter([
 {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children :[
        {
            path:"/",
            element:<Body user={{
               name :"namste React",
               email:"suppport@namastedev.com",
            }}/>
         },
        {
            path:"/about",
            element:<About/>, 
            children:[
            {
               path:"profile",
               element:<Profile/>,
            },
         ],
         },
         {
            path:"/Contacts",
            element:<Contacts/>, 
         },
         {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>,
             
         },
         {
            path:"/Instamart",
            element: <Instamart/>
         ,
         },
    ],
 },
 
]);


    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);