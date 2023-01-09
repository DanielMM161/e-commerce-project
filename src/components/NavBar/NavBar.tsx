import { Logo, StyledNavBar } from "./styled-component/navBar.styled.component"
import { Link } from "react-router-dom";
import { useAppSelector, UseModal, UseSideBar, UseUserSession } from "../../hooks";
import { SideBar, Cart, Register, Login, Modal } from '../index'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';

const NavBar = () => {

    const userState = useAppSelector(state => state.user)    

    const {showModal, toggle, showLogin, toggleLogin, titleModal} = UseModal()
    const {showSideBar, toggle: toggleSideBar} = UseSideBar()
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
                    <Login register={() => toggleLogin()} closeModal={() => toggle()}/>
                ) : (
                    <Register goLogin={() => toggleLogin()} closeModal={() => toggle()} />
                )}
            </Modal>

        </StyledNavBar>
    )

}

export default NavBar