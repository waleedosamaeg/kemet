import React from "react"
import Router from "@comp/router.jsx"
import Header from "@comp/header.jsx"
import { BrowserRouter } from "react-router-dom"
function App() { 

  return (
    <>
       <BrowserRouter>
          <Header />
          <Router/>
       </BrowserRouter>
     
    </>
  )
}

export default App