import { useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector, UseModal, useSideBar } from "../../hooks";
import { SideBar, Cart, Register, Login, Modal } from '../index'
import { LoadingPulsating } from "../LoadingPulsating/LoadingPulsating";
import { SnackBar } from "../SnackBar/SnackBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';

import { StyledNavBar } from "./styles";




const NavBar = () => {
    
    const userState = useAppSelector(state => state.user)
    const { user, isLoading } = userState 

    const [titleModal, setTitleModal] = useState("Login")
    const {showModal, toggle, showLogin, toggleLogin} = UseModal()
    const {showSideBar, toggle: toggleSideBar} = useSideBar()

    const notificationState = useAppSelector(state => state.notifications)
    const {show, message, error} = notificationState

    return (
        <StyledNavBar>
            <div className="navbar-container">
                <Link to="/" >
                    LOGO HERE
                </Link>
                <nav>
                    <ul className="nav-ul">
                        {user != null ? (
                            <li>
                                <Link to="/profile">
                                    <PersonIcon />
                                    <span>My Account</span>
                                </Link>
                            </li>
                        ) : (
                            <li onClick={() => toggle()}>
                                <LoginIcon />
                               <span>Login</span> 
                            </li>
                        )}

                        <li>
                            <Link to="/products">
                                <ListAltIcon />
                                <span>Shop</span>
                            </Link>
                        </li>

                        <li onClick={() => toggleSideBar()}>
                            <ShoppingCartIcon />
                            <span>Shopping Cart</span>                            
                        </li>                        

                    </ul>
                </nav>

            </div>
      
            <SideBar
                title="Shoping Cart"
                isLeftSide={false}
                isOpen={showSideBar}
                closeSideBar={() => toggleSideBar()}
            >
                <Cart />
            </SideBar>

            <Modal 
                title={titleModal}
                showModal={showModal} 
                closeDialog={() => toggle()}
            >
                {showLogin ? (
                    <Login goRegister={() => {
                        setTitleModal("Register")
                        toggleLogin()
                    }} closeModal={() => toggle()}/>
                ) : (
                    <Register 
                        closeModal={() => toggle()} 
                        goLogin={() => {
                            setTitleModal("Login")
                            toggleLogin()
                        }} 
                    />
                )}
            </Modal>

            <LoadingPulsating  show={isLoading}/>

            <SnackBar show={show} message={message} error={error}/>

        </StyledNavBar>
    )
}

export default NavBar