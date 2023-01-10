import { StyledSnackBar } from "./styled-component/snackBar.styled"
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { hiddeNotification } from "../../redux/slices";
import { INotification } from "../../models/notification.model";

export const SnackBar = ({
  show,
  message,
  error
}: INotification) => {

  const dispatch = useDispatch()

  useEffect(() => {
    if(show) {
      setTimeout(() => {
        dispatch(hiddeNotification())
      }, 5000)
    }
  }, [show])

  return (
    <>
      {show ? (
        <StyledSnackBar error={error}>
          <h3 className="message-snack">{message}</h3>
          <button className="button-snack" onClick={() => dispatch(hiddeNotification())}>Ok</button>
        </StyledSnackBar>
      ) : null}
    </>
  )
}