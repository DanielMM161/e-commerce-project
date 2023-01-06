import { Logo, StyledNavBar } from "./styled-component/navBar.styled.component"
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useAppSelector, UseModal } from "../../hooks";
import { Login, Register } from "../Forms";
import UseUserSession from './../../hooks/useUserSession';

const NavBar = () => {

    const userState = useAppSelector(state => state.user)
    const {showModal, toggle, showLogin, toggleLogin, titleModal} = UseModal()
    // Check user session
    UseUserSession()
    
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
                            
                        <Link to="/cart">
                            Shopping Cart
                        </Link>
                    </ul>
                </nav>
            </div>

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