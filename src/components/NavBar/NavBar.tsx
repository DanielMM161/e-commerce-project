import { Logo, StyledNavBar } from "./styled-component/navBar.styled.component"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector, UseModal, UseSideBar, UseUserSession } from "../../hooks";
import { SideBar, Cart, Register, Login, Modal } from '../index'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from "react";
import { fetchUserSession } from './../../services/user.service';

const NavBar = () => {

    const dispatch = useAppDispatch()
    const userState = useAppSelector(state => state.user)
    const { user } = userState 

    const [titleModal, setTitleModal] = useState("Login")
    const {showModal, toggle, showLogin, toggleLogin} = UseModal()
    const {showSideBar, toggle: toggleSideBar} = UseSideBar()
    // Check user session
    //UseUserSession()

    useEffect(() => {
        console.log("useEffect --> NavBar");
        dispatch(fetchUserSession())        
    }, [])
    
    return (
        <StyledNavBar>
            <div className="container">
                <Logo to="/" >
                    LOGO HERE
                </Logo>
                <nav>
                    <ul className="nav-ul">
                        {user != null ? (
                            <Link to="/profile">
                                <PersonIcon />
                                My Account
                            </Link>
                        ) : (
                            <span onClick={() => toggle()}>
                                <LoginIcon />
                                Login
                            </span>
                        )}
                        
                        <Link to="/products">
                            <ListAltIcon />
                            Products
                        </Link>

                        <span onClick={() => toggleSideBar()}>
                            <ShoppingCartIcon />
                            Shopping Cart
                        </span>
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

            <Modal title={titleModal} closeDialog={() => toggle()} showModal={showModal} >
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

        </StyledNavBar>
    )

}

export default NavBar