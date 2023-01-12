import { EditProduct, Modal } from "../../../../components"
import { UseModal } from "../../../../hooks"
import { Product } from "../../../../models"
import { useState, useEffect } from 'react';
import { deleteProduct, updateProduct } from "../../../../services";
import { useNavigate } from "react-router";
import { useAppDispatch } from './../../../../hooks/redux.hook';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteProduct } from "../../../../components/Forms/DeleteProduct/DeleteProduct";
import { StyledUserAdmin } from "./styled-component/userAdmin.styled";

interface IUserAdminProps {
  product: Product
}

const FORMS = {
  NONE: 0,
  EDIT_PRODUCT: 1,
  DELETE_PRODUCT: 2
}

const UserAdmin = ({
  product,
}: IUserAdminProps) => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {showModal, toggle} = UseModal()
  const [typeForm, setTypeForm] = useState({
    title: "",
    forms: FORMS.NONE
  })

  function showEditProduct() {
    setTypeForm({
      title: "Edit Product",
      forms: FORMS.EDIT_PRODUCT
    })
    toggle()
  }

  function showDeleteProduct() {
    setTypeForm({
      title: "Delete Product",
      forms: FORMS.DELETE_PRODUCT
    })
    toggle()
  }

  function handleDeleteProduct() {
    dispatch(deleteProduct(product.id))
      .then(value => {              
        if(value.payload) {
          navigate("/products") 
        }
      })
  }

  return (
    <StyledUserAdmin>
      <button className="button-admin" onClick={() => showEditProduct()}>
        EDIT PRODUCT
        <EditIcon />
      </button>

      <button className="button-admin delete-button" onClick={() => showDeleteProduct()}>
        DELETE PRODUCT
        <DeleteIcon />
      </button>

      <Modal
        title={typeForm.title}
        showModal={showModal}
        closeDialog={toggle}
      >
        {typeForm.forms === FORMS.EDIT_PRODUCT ? (
          <EditProduct 
            product={product} 
            editProduct={(product) => {
              dispatch(updateProduct(product))
              toggle()
            }}
          />
        ) : null}

        {typeForm.forms === FORMS.DELETE_PRODUCT ? (
          <DeleteProduct deleteProduct={() => handleDeleteProduct()} cancel={() =>  toggle()}/>
        ) : null}
      </Modal>
    </StyledUserAdmin>
  )
}

export default UserAdmin