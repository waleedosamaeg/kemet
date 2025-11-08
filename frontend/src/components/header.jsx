import {  Link } from "react-router-dom";
import "@css/header.css"
function Header() {
    return (
        <>
        <headr className = 'header'>
            <Link to = "/"id = 'logo'><span className = 'ankh'>☥</span> {(import.meta.env.VITE_APPNAME).toUpperCase()} <span className = 'ankh'>☥</span></Link>
            <nav >
                    <Link to="/register" className = "item" >Register </Link>
                    <span className='separator'>☥</span>
                    <Link to="/download" className = "item" >DOWNLOAD </Link>
                    <span className='separator'>☥</span>
                    <Link to="/ranking" className = "item" >RANKING </Link>
                    <span className='separator'>☥</span>
                    <Link to="/shop" className = "item" >SHOP </Link>
                    <span className='separator'>☥</span>
                    <Link to="/contact" className = "item" >CONTACT US</Link>
            </nav>
        </headr>
        </>
    )
}
export default Header;