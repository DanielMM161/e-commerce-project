import { IconHouse, StyledBreadCrums, StyledLinks } from "./styles"

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
                            <span key={link.path}>/</span>
                            <StyledLinks  key={link.name} to={link.path}>{link.name}</StyledLinks>                        
                        </>
                    )
                })
            }
        </StyledBreadCrums>
    )

}

export default BreadCrumbs