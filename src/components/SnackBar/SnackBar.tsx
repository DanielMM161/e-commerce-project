
import { useEffect } from 'react';

import { hiddeNotification } from "../../redux/slices";
import { INotification } from "../../models/notification.model";
import { useAppDispatch } from '../../hooks';

import { StyledSnackBar } from './styles';

export const SnackBar = ({
  show,
  message,
  error
}: INotification) => {

  const dispatch = useAppDispatch()

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