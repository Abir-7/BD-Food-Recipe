import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Mainpage from "../PageLayout/Mainpage";
import RecipePage from "../PageLayout/RecipePage";
import AllRecipe from "../Pages/AllRecipe/AllRecipe";
import LoginLogout from "../PageLayout/LoginLogout";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import PrivetRouts from "./PrivetRouts";
import NotFound from "../Pages/PageNotFound/NotFound";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainpage/>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
          loader:()=>fetch('https://recipe-world-server-abir-7.vercel.app/chef')
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        }
      ],
    },
    {
      path:"chef",
      element:<RecipePage></RecipePage>,
      children:[
        {
          path:":id",
          element:<PrivetRouts><AllRecipe></AllRecipe></PrivetRouts>,
          loader:({params})=>fetch(`https://recipe-world-server-abir-7.vercel.app/chef/${params.id}`)
        }
      ]
    },
    {
      path:"/user",
      element:<LoginLogout></LoginLogout>,
      children:[
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        }
      ]
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ]);

  export default router;