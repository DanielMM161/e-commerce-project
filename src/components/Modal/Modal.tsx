import React from "react"

import CloseIcon from '@mui/icons-material/Close';

import { StyleModal } from "./styles";

interface IModal {
    title: string
    showModal: boolean
    closeDialog: () => void
    children: React.ReactNode
}

const Modal = ({
    title,
    showModal,
    closeDialog,
    children
}: IModal) => {
      
    return (
        <>
            {showModal ? (
                <StyleModal>
                    <div className='overlay' onClick={closeDialog}></div>
                    <div className="modal">
                        <header className="modal-header">
                            <h3>{title}</h3>
                            <button className="button-close" onClick={closeDialog}>
                                <CloseIcon />
                            </button>
                        </header>
                        <div className="children-container">
                            {children}
                        </div>
                    </div>
                </StyleModal>   
            ) : null}
        </>
    )
}

export default Modal