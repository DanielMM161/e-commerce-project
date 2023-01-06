import { Logo, StyledNavBar } from "./styled-component/navBar.styled.component"
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { UseModal } from "../../hooks";
import { Login, Register } from "../Forms";

const NavBar = () => {

    const {showModal, toggle, showLogin, toggleLogin, titleModal} = UseModal()
    
    return (
        <StyledNavBar>
            <div className="container">
                <Logo to="/" >
                    LOGO HERE
                </Logo>
                <nav>
                    <ul className="nav-ul">
                        <span onClick={() => toggle()}>
                            Login
                        </span>
                        
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