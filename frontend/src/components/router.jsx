import {Routes , Route } from "react-router-dom"
import Main from "@pages/main.jsx"
import Test from "@pages/test.jsx"
import Notfound from "@pages/404.jsx"




function Router() { 
    return (
           
    
            <Routes>
                <Route path = "/" element = {<Main />}></Route>
                <Route path = "/test" element = {<Test />}></Route>
                <Route path = "*" element = {<Notfound/>}></Route>
            </Routes>
     
    )
}
export default Router;
