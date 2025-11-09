import React , {createContext , useContext} from "react"
import useAppReducer from "@hooks/appReducerHook.jsx"

const AppContext = createContext()


function AppProvider ({children}) { 
    const {state , dispatch} = useAppReducer()
    return (
        <AppContext.Provider value = {{state , dispatch}}>
            {children}
        </AppContext.Provider>
    )

}

export const useApp = ()=>{ return useContext(AppContext)}
export default AppProvider