import {  Link } from "react-router-dom";
import "@css/header.css"
import {useApp} from "@context/appContext.jsx";
import {useEffect} from "react"
function Header() {
    
    const {state } = useApp()

    
    return (
        <>
        <header className = 'header'>
            <Link to = "/"id = 'logo'><span className = 'ankh'>☥</span> {(import.meta.env.VITE_APPNAME).toUpperCase()} <span className = 'ankh'>☥</span></Link>
            <nav >
                    <Link to="/register" className = "item" >REGISTER </Link>
                    <span className='separator'>☥</span>
                    <Link to="/download" className = "item" >DOWNLOAD </Link>
                    <span className='separator'>☥</span>
                    <Link to="/ranking" className = "item" >RANKING </Link>
                    <span className='separator'>☥</span>
                    <Link to="/shop" className = "item" >SHOP </Link>
                    <span className='separator'>☥</span>
                    <Link to="/contact" className = "item" >CONTACT US</Link>
            </nav>
            <div className = 'profile'>{state.is_logged ? <Link to="/contact" className = "item" >Wellcome</Link>:null}</div>
        </header>
        </>
    )
}
export default Header;