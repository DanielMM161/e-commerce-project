import React from "react"
import { StyledModal } from "./styled-component/modal.styled.component"

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
                <StyledModal>
                    <div className='overlay' onClick={() => closeDialog}></div>
                    <div className="modal">
                        <header className="modal-header">
                            <h3>{title}</h3>
                            <button className='close-icon' aria-label='Close' onClick={closeDialog}></button>
                        </header>
                        {children}                        
                    </div>
                </StyledModal>   
            ) : null}
        </>
    )
}

export default Modal