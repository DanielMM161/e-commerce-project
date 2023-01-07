import { Logo, StyledNavBar } from "./styled-component/navBar.styled.component"
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useAppSelector, UseModal, UseSideBar } from "../../hooks";
import { Login, Register } from "../Forms";
import UseUserSession from './../../hooks/useUserSession';
import { SideBar } from "../SideBar";
import { useEffect } from "react";

const NavBar = () => {

    const userState = useAppSelector(state => state.user)
    const cartState = useAppSelector(state => state.cart)

    const {showModal, toggle, showLogin, toggleLogin, titleModal} = UseModal()
    const {showSideBar, toggle: toggleSideBar} = UseSideBar()
    // Check user session
    UseUserSession()
    
    useEffect(() => {
        console.log("cart state se actualiza");
        
    
    },[cartState])
    
    return (
        <StyledNavBar>
            <div className="container">
                <Logo to="/" >
                    LOGO HERE
                </Logo>
                <nav>
                    <ul className="nav-ul">
                        {userState != null ? (
                            <Link to="/profile">
                                My Account
                            </Link>
                        ) : (
                            <span onClick={() => toggle()}>
                                Login
                            </span>
                        )}
                        
                        <Link to="/products">
                            Products
                        </Link>

                        <span onClick={() => toggleSideBar()}>
                            Shopping Cart
                        </span>
                    </ul>
                </nav>
            </div>

            <SideBar
                title="Shoping Cart"
                isLeft={false}
                isOpen={showSideBar}
                closeSideBar={() => toggleSideBar()}
            >
                {cartState.map((value) => <div>{value.product.title}</div>)}

            </SideBar>

            <Modal title={titleModal} closeDialog={() => toggle()} showModal={showModal} >
                {showLogin ? (
                    <Login register={() => toggleLogin()} closeModal={() => toggle()}/>
                ) : (
                    <Register goLogin={() => toggleLogin()} closeModal={() => toggle()} />
                )}
            </Modal>

        </StyledNavBar>
    )

}

export default NavBar