import Nav from './components/nav';
import LandingPage from './page/landingpage';
import AboutUs from './page/aboutUs';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Section1 from './components/section1';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Section1/>
    },
    {
      element:<Nav/>,
      children:[
        {
          path:'/home',
          
          element:<LandingPage/>
        },
        {
          path:'about',
          element:<AboutUs/>
        }
      ],
    }
  ])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
