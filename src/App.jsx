import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from "react-router-dom"
import WelcomePage from "./Layouts/WelcomePage"
import PlansPage from "./Layouts/PlansPage"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProfileSetup from "./Layouts/ProfileSetup";
import HomePage from "./Layouts/HomePage";
import Explore from "./Layouts/Explore";


function App() {
  const {i18n} = useTranslation()
  useEffect(()=>{
    if(i18n.language == 'fr'){
      document.body.dir = 'ltr'
    }else{
      document.body.dir = 'rtl'
    }
  } , [i18n.language])

  
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" >
         <Route element= {<HomePage />} path="/" >
            <Route index element= {<Explore />} />
         </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
