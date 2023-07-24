import { useState } from "react";

const Section = ({title,description,isvisible,setIsVisible}) =>{
    
    return(
      <div className="boder border-black p-2 m-2">
        <h3 className=" font-bold text-xl">{title}</h3> 
        {isvisible ? (<button 
        onClick={() => setIsVisible(false)}
        className="cursor-pointer">
            Hide
        </button>):(
        <button 
        onClick={() => setIsVisible(true)}
        className="cursor-pointer">show</button>
        )}
       
       {  isvisible && <p>{description}</p>}
       </div>  
      
    );
};


const Instamart = () => {
    const [visibleSection, setIsvisibleSection] = useState("about")
    
    
    return(
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
          <Section 
          title={"About Instamart"} 
          description={"this is about thee sections"}
          isvisible={visibleSection == "about"}
          setIsVisible={() => setIsvisibleSection("about")}
          />
          <Section 
          title={"About Instamart"} 
          description={"this is about thee sections"} 
          isvisible={visibleSection == "team"}
          setIsVisible={() => setIsvisibleSection("team")}
          />
          <Section 
          title={"carrers"} 
          description={"this is about thee sections"} 
          svisible={visibleSection == "carrers"}
          setIsVisible={() => setIsvisibleSection("team")}
          />
        
        </div>
    );
};
export default Instamart;