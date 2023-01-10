import styled, { keyframes } from "styled-components";

const pulseRing = keyframes`
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
`

const pulseDot = keyframes`
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
`

export const StyledLoadingPulsating = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255 255 255 / 31%);
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  
  .pulsating-circle {
    width: 30px;
    height: 30px;
    
    &:before {
      content: '';
      position: relative;
      display: block;
      width: 300%;
      height: 300%;
      box-sizing: border-box;
      margin-left: -100%;
      margin-top: -100%;
      border-radius: 45px;
      background-color: rgb(97 17 34 / 1);
      animation: ${pulseRing} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
  }

  span {
    padding: .5rem;
    background-color: rgb(255 255 255);
    color: black;
  }
`
