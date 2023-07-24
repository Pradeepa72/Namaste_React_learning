import React from "react";

class Profile extends React.Component{
    constructor(){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy name",
                location:"Dummy locations",
            },
        };
        console.log("child - constructor" +this.props.name);
    }
    async componentDidMount(){
        const data = await fetch(" https://api.github.com/users/Pradeepa72");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json,
    });
        // APi call
        console.log("child-componentDidMount"+this.props.name);
    }
    componentDidUpdate  (){
        console.log("component Did update");
    }
    componentWillUnmount (){
        console.log("component Will Unmount");
    }

    
    
    render(){
        const {Count} = this.state;
        console.log("child-render"+this.props.name);
        return( 
        <div>
            <h1>Profile class component</h1>
             <h2>name:{this.state.userInfo.name}</h2>
            <h2>location:{this.state.userInfo.location}</h2>
        </div>
        );
    }
}
export default Profile;