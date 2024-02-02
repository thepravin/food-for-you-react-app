// class base component

import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    // console.log("Child-Constructor");
  }

  // API CALL
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/thepravin");
    const jason = await data.json();
    // console.log(jason);

    // setState
    this.setState({
      userInfo: jason,
    });
    // console.log("Child - componentDidMount");
  }

  render() {
    // console.log("Child- render");
    return (
     <div className="profile-card">
         <div className="profile-contenor">
        {/* <img src="public\about_img.jpg" alt="profile Image" className="profile-img" /> */}
        <div className="profile-details">
          {/* <h2>{this.state.userInfo.name}</h2> */}
          <p>
            Hey.., 
          </p>
          <p>
            I am Pravin. Currently, I am pursuing my<br /> B.Tech in
            Information Technology (IT) from the <br />
             Government College Of
            Engineering, Karad, Maharashtra.
          </p>

        <div className="profile-btn">
            <div className="linkedin">
           <Link to="https://www.linkedin.com/in/thepravin/">
           <button ><i class="fa-brands fa-linkedin"></i> Linkedin</button>
           </Link>
            </div>
            <div className="github">
           <Link to="https://github.com/thepravin">
           <button><i class="fa-brands fa-square-github"></i> Github</button>
           </Link>
            </div>
        </div>
        </div>
      </div>
     </div>
    );
  }
}

export default Profile;
