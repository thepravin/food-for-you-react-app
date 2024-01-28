

// class base component

import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        // create state
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            },
        }
        console.log("Child-Constructor");
    }

    // API CALL
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/thepravin");
        const jason = await data.json();
        console.log(jason);

        // setState
        this.setState({
            userInfo:jason,
        });
        console.log("Child - componentDidMount");

    }

    render(){
        console.log("Child- render");
        return(
            <div>
                <img src={this.state.userInfo.avatar_url} alt="profile Image" />
                <h2>{this.state.userInfo.name}</h2>
                <h3>UserID : {this.state.userInfo.login}</h3>
                <h4>Public Repos : {this.state.userInfo.public_repos}</h4>
                <button onClick={()=>{
                   console.log( this.state.userInfo.url);
                }}>Profile</button>
            </div>
        )
    }
}

export default Profile