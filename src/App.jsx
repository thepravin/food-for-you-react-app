import { Outlet } from "react-router-dom";
import "./App.css";

import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import Store from "./Utils/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
        {/* <Body /> */}
        <Outlet />
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default App;
