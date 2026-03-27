import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Privateroute=({children})=>{
    const {token}=useSelector((s)=>s.users)
    return token ? children : <Navigate to={'/login'} replace />
}



export default Privateroute