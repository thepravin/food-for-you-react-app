import { Outlet } from "react-router-dom";
import "./App.css";

import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet/>

      <Footer/>
    </>
  );
}



export default App;
