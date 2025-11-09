import {useReducer , useEffect} from "react"
import axios from "axios" 

const initialState = {
    is_logged : false ,
    profile : null , 
    loading : false , 
    notification :  []
}

function appReducer( state , action) { 

    switch (action.type)  {
        case "login" : 
            return {...state ,  is_logged : true, profile : action.profile , loading : false }
        case "logout" : 
            return {...state , profile : null , is_logged : false  , loading : false }
        default : 
            return {...state}
    }
}

function useAppReducer() { 

    const [state , dispatch] = useReducer( appReducer , initialState)
    return {state , dispatch}
}
export default useAppReducer