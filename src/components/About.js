import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./Profile";
import { Component } from "react";

    
class About extends Component{
    constructor(props){
        super(props);
        
        console.log("parent-constractor");
    }
    componentDidMount(){
    
        console.log("Parent-componentDidMount");
    }
    render(){
       console.log("render");
        return(
            <div>
                    <h1>About as Page</h1>

                    <p>
                        
                        this is the namaste Live course -Find the Path
        
                    </p>
                    {/* <Outlet/> */}
                    <Profile/>
                   
            </div>
            );
        };

    }

export default About;

 