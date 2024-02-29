import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const AppLayout=()=>{
  return(
    <div className="Father">
    <Header/>
    <Outlet/>
    </div>
  )
}

//Lazy Loading Component
const LazyComponent=lazy(()=>import("./components/RestaurantMenu"));

//Router Configuration
const Routes=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/restaurants/:resid",
          element:<Suspense fallback={<h1>Loading...</h1>}><LazyComponent/></Suspense>
        }
      ],
      errorElement:<Error/>
    }
  ]
)

const root=ReactDOM.createRoot(document.getElementById("root"));

//Setting the routes
root.render(<RouterProvider router={Routes}/>)


