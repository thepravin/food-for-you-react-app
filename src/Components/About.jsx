import Profile from "./Profile";
import {Outlet} from "react-router-dom"

const About = ()=>{
    return(
        <>
           <div className="about-container">         
            <Profile/>    
            {/* <Outlet/>   >>>>>  used when localhost:5125/about/profile */}
           </div>
        </>
    )
}

export default About;