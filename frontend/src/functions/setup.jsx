    import {useEffect} from "react"
    import {useApp} from "@context/appContext.jsx"
    import validateToken from "@functions/token_validation.js"
    function Setup () {    

        const {state , dispatch} = useApp()
        useEffect(  ()=>{
           

        
                const response = validateToken(localStorage.getItem("token"))
                response.then((data )=>{
                    if (!data) return ;
                    if (!data.valid) { 
                        return localStorage.removeItem("token")
                        
                    }
                    // update the state 
                    dispatch({type : "login" , profile : data.data})
                    
                })
               
        } , [dispatch])

        return  null 
    }
    export default Setup