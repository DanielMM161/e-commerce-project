import { StyledButtonLoader, StyledButtonWrapper, StyledLoad } from "./styles"

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