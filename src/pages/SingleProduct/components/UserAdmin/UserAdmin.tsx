import { EditProduct, Modal } from "../../../../components"
import { UseModal } from "../../../../hooks"
import { Product } from "../../../../models"
import { useState } from 'react';
import { deleteProduct, updateProduct } from "../../../../services";
import { useNavigate } from "react-router";
import { useAppDispatch } from './../../../../hooks/redux.hook';

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
    navigate("/products")
    dispatch(deleteProduct(product.id))
  }

  return (
    <div>
      <button onClick={() => showEditProduct()}>EDIT PRODUCT</button>
      <button onClick={() => showDeleteProduct()}>DELETE PRODUCT</button>

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
          <>            
              <button onClick={() => handleDeleteProduct()}>DELETE</button>
              <button onClick={() =>  toggle()}>CANCEL</button>
          </>
        ) : null}
      </Modal>
    </div>
  )

}

export default UserAdmin