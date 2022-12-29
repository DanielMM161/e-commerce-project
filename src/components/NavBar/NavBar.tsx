import { DivContainer, Logo, Nav, NavLink, StyledNavBar } from "./styled-component/navBar.styled.component"

const NavBar = () => {
    
    return (
        <StyledNavBar>
            <DivContainer>
                <Logo to="/" >
                    LOGO HERE
                </Logo>
                <Nav>
                    <ul className="nav-ul">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        
                        <NavLink to="/products">
                            Products
                        </NavLink>
                            
                        <NavLink to="/cart">
                            Shopping Cart
                        </NavLink>
                    </ul>
                </Nav>
            </DivContainer>
        </StyledNavBar>
    )

}

export default NavBar