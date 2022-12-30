import { IconHouse, StyledBreadCrums, StyledLinks } from "./styled-component/breadCrumbs.styled.component"

interface BreadCrumbs {
    path: string
    name: string
}

interface IBreadCrumbsProps {
    links: BreadCrumbs[]
}

const BreadCrumbs = ({ links } : IBreadCrumbsProps) => {
    
    return (
        <StyledBreadCrums>
            <IconHouse  to={"/home"}/>
            {
                links.map((link) => {
                    return (
                        <>
                            <span>/</span>
                            <StyledLinks to={link.path}>{link.name}</StyledLinks>                        
                        </>
                    )
                })
            }
        </StyledBreadCrums>
    )

}

export default BreadCrumbs