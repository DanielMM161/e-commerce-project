import { StyledSnackBar } from "./styled-component/snackBar.styled"
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { hiddeNotification } from "../../redux/slices";

interface ISnackBarProps {
  show: boolean
}

export const SnackBar = ({
  show
}: ISnackBarProps) => {

  const dispatch = useDispatch()


  useEffect(() => {
    if(show) {
      setTimeout(() => {
        dispatch(hiddeNotification())
      }, 5000)
    }
  }, [show
  ])

  return (
    <>
      {show ? (
        <StyledSnackBar>
          <h3>SNACK BAR</h3>
        </StyledSnackBar>
      ) : null}
    </>
  )
}