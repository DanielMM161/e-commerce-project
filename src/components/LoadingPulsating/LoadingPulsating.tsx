import { StyledLoadingPulsating } from "./styles"

interface ILoadingPulsatingProps {
  show: boolean
}

export const LoadingPulsating = ({
  show
}: ILoadingPulsatingProps) => {

  return (
    <>
      {show ? (              
        <StyledLoadingPulsating>
          <div className="pulsating-circle"></div>
          <span>Plase wait</span>
        </StyledLoadingPulsating>        
      ) : null}
    </>
  )

}