import {  Link } from "react-router-dom";
import "@css/header.css"
import {useApp} from "@context/appContext.jsx";
import { Dropdown, Avatar , Badge  , Button} from 'rsuite';
import { IoLogIn } from "react-icons/io5";

const Panel = ({nickname})=>{
    return (
         <div className  = "avatar">
            <Badge  style={{ background: '#4caf50' }}/>
                            <Dropdown   className = 'panel' style  = {{ }} title = {"Account Panel"} placement="bottomEnd" >
                                <Dropdown.Item panel style={{ padding: 10, width: 150 }}>
                                    <p>Wellcome</p>
                                    <strong>@{nickname || 'unknown' }</strong>
                                </Dropdown.Item>
                                <Dropdown.Separator />
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Prauchase Histroy</Dropdown.Item>
                                <Dropdown.Separator />
                                
                                <Dropdown.Item>Change Password</Dropdown.Item>
                                <Dropdown.Item>Change Email</Dropdown.Item>
                                <Dropdown.Separator />
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            
                            </Dropdown>
            </div>

    )
}

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
                {state.is_logged ? <Panel profile = {state.profile} /> : <Button  color="orange" startIcon = {<IoLogIn  size={"20"}/>} appearance="primary">LOGIN</Button>}

        </header>
        </>
    )
}
export default Header;