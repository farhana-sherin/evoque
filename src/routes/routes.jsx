import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainLayout } from "../layouts/MainLayout";
import { About } from "../components/About";
import { Men } from "../pages/Men";
import { MenShop } from "../pages/MenShop";
import { Explore } from "../components/ExploreCollection";
import { MensShoes } from "../components/Menshoes";
import { MensSandals } from "../components/MensSandals";
import { AboutUs } from "../components/AboutUs";

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
        }
        
      ],
    },
  ]);