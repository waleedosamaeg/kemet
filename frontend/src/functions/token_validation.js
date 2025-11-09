import axios from "axios"
async function ValidateToken(token) { 

    

    if (!token) {return ;}
    try  {

        const response =    await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/token/verify` ,
            {headers : {"Authorization" : `Bearer ${localStorage.getItem("token")}`} ,validateStatus : ()=>true} )
        
       
        
        return {...response.data}
    }catch (error) { 
        console.log(error)
        return {valid : false}
    }

}
export default ValidateToken;
