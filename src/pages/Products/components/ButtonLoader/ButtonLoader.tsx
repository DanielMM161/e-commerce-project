import { StyledButtonLoader, StyledButtonWrapper, StyledLoad } from "./styled-components/buttonLoader.styled.component"

interface IButtonLoader {
    loading: boolean,
    onClick: () => void
}

export const ButtonLoader = ({
    loading,
    onClick
}: IButtonLoader) => {
    
    return (
        <StyledButtonWrapper>
            <StyledButtonLoader onClick={() => onClick()}>
                {loading ? (
                    <StyledLoad></StyledLoad>
                ) : (
                    <>
                        Load More
                    </>
                )}                                
            </StyledButtonLoader>
        </StyledButtonWrapper>
    )
}