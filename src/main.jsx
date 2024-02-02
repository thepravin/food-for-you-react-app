import React, { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from './Components/Error.jsx';
import Body from './Components/Body.jsx';
import Contact from './Components/Contact.jsx';
import ResturentMeniu from './Components/ResturantMeniu.jsx';
import Profile from './Components/Profile.jsx';
import SimmerUI from './Components/SimmerUI.jsx';
import ShopCart from './Components/ShopCart.jsx';


//import InstaMart from './Components/InstaMart.jsx';

// lazy loading / chunking / dynamic loading / on demand loading
const InstaMart = lazy(()=>import("./Components/InstaMart.jsx"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
        children:[
            {
              path:"profile",  // localhost:5125/about/profile
             // path:"/profile" -> localhost:5125/porfile : this is wrong
              element:<Profile/>

            }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>,
      }, 
       {
        path:"/resturant/:id",
        element:<ResturentMeniu/>
      },
       {
        path:"/instamart",
        element:(
          <Suspense fallback={<SimmerUI/>}>
            <InstaMart/>
          </Suspense>
        )
      },
      {
        path:"/cart",
        element:<ShopCart/>
      },
    ]

  },
/* 
  // this is rendering new page and not show header and footer
  {
    path: "/about",
    element: <About/>,
  }, */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/> 
  </React.StrictMode>,
)
