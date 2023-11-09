import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Blogs from "../pages/Blogs";
import AllJobs from "../pages/AllJobs";
import MyJobs from "../pages/MyJobs";
import SingleJobDetails from "../pages/SingleJobDetails";
import AddAJob from "../pages/AddAJob";
import AppliedJobs from "../pages/AppliedJobs";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";
import Update from "../components/Update";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
      {
        path:'/allJobs',
        element:<AllJobs></AllJobs>,
        loader:()=>fetch('https://ass-11-server-side.vercel.app/allJobs', )
        
      },
      {
          path:'/allJobs/:id',
          element:<PrivateRoute><SingleJobDetails></SingleJobDetails></PrivateRoute>,
          loader:({params})=> fetch(`https://ass-11-server-side.vercel.app/myJobs/${params.id}`) 
      
      },
      {
        path:'/myJobs',
        element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path:'/myJobs/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://ass-11-server-side.vercel.app/myJobs/${params.id}`)
      },
      {
        path:'/addAJob',
        element:<PrivateRoute><AddAJob></AddAJob></PrivateRoute>
      },
      {
        path:'/appliedJobs',
        element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      }

      ]
    },
  ]);

export default routes;