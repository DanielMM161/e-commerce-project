import { StyledSideBar } from "./styled-component/sideBar.styled.component"

interface ISideBar {
    title: string
    isOpen: boolean
    isLeft?: boolean
    closeSideBar: () => void
    children: React.ReactNode
}

const SideBar = ({
    title,
    isOpen,
    isLeft = true,
    closeSideBar,
    children
}: ISideBar) => {
    
    return (
        <>
            {isOpen ? (
                <StyledSideBar className={isLeft ? "left" : "right"} style={isOpen ? { transform: "translateX(0%)" } : { transform: "translateX(-100%)" }}>                
                    <div
                        className={isLeft ? "overlay overlay-left" : "overlay overlay-right"}
                        style={isOpen ? { display: "block" } : { display: "none" }}
                        onClick={() => closeSideBar()}
                    >
                    </div>
                    <header className="header">
                        <h2>{title}</h2>
                        <i onClick={() => closeSideBar()} className="close-icon" />
                    </header>
                    {children}
                </StyledSideBar>
            ) : null}
        </>
    )

}

export default SideBar