
import './App.css'
import Contact from './Componets/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Componets/Layout/Layout.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import Portfolio from './Componets/Portfolio/Portfolio.jsx'
import Notfound from './Componets/Notfound/Notfound.jsx'


function App() {
  let routes = createBrowserRouter([{
    path:"" , element:<Layout/> ,children:[
      {index:true , element:<Home/>},
      {path:"about" , element:<About/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"contact" , element:<Contact/>},
      {path:"*" ,element:<Notfound/>}
    ]
  }])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
