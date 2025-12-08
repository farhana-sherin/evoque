import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainLayout } from "../layouts/MainLayout";
import { Men } from "../pages/Men";

import { Explore } from "../components/ExploreCollection";
import { MensShoes } from "../components/Menshoes";
import { MensSandals } from "../components/MensSandals";
import { AboutUs } from "../components/AboutUs";
import { Women } from "../pages/Women";
import { WomensShoes } from "../components/WomenShoes";
import { WomensSandals } from "../components/Womensandals";
import { WomenShop } from "../pages/WomenShop";
import MenShop from "../pages/MenShop"; 
import { Map } from "../components/Map";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/about",
          element: <AboutUs/>
        },

        {
          path: "/Men",
          element: <Men/>

        },

        {
          path: "/Menshop",
          element: <MenShop/>

        },


        
        {
          path: "/explore",
          element: <Explore/>

        },
        {
          path: "/menshoes",
          element: <MensShoes/>
        },
        {
          path: "/mensandals",
          element: <MensSandals/>
        },
        {
          path: "/women",
          element: <Women/>
        },
        {
          path:"/womenshoes",
          element:<WomensShoes/>
        },
        {
          path:"/womensandals",
          element:<WomensSandals/>
        },
        {
          path:"/womenshop",
          element:<WomenShop/>

        },{

          path:"/map",
          element:<Map />
          

        }
        
        
      ],
    },
  ]);