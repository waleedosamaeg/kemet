import React , {useEffect} from "react"
import Router from "@comp/router.jsx"
import Header from "@comp/header.jsx"
import { BrowserRouter } from "react-router-dom"
import AppProvider from "@context/appContext.jsx"
import Setup from "@functions/setup.jsx"
import 'rsuite/dist/rsuite.min.css';



function App() { 



  return (
    <>
    <AppProvider>
        <Setup/>
        <BrowserRouter>
            <Header />
            <Router/>
        </BrowserRouter>
    </AppProvider>
      
     
    </>
  )
}

export default App