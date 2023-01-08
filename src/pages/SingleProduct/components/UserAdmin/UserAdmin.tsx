import { EditProduct, Modal } from "../../../../components"
import { UseModal } from "../../../../hooks"
import { Product } from "../../../../models"
import { useState } from 'react';
import { deleteProduct } from "../../../../services";
import { Navigate, useNavigate } from "react-router";

interface IUserAdminProps {
  product: Product
  productEdited: (productEdited: Product) => void
}

const FORMS = {
  NONE: 0,
  EDIT_PRODUCT: 1,
  DELETE_PRODUCT: 2
}

const UserAdmin = ({
  product,
  productEdited
}: IUserAdminProps) => {

  const navigate = useNavigate()
  const {showModal, toggle} = UseModal()
  const [typeForm, setTypeForm] = useState({
    title: "",
    forms: FORMS.NONE
  })

  function editProduct() {
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
    deleteProduct(product.id)
      .then((value) => {
        if(value.status === 200) {
          if(value.data) {
            //TODO SHOW SNACK BAR
            toggle()
            navigate('/products')            
          }
        }
      })
      .catch((err) => {
        //TODO MANAGE ERROR
      })
  }

  return (
    <div>
      <button onClick={() => editProduct()}>EDIT PRODUCT</button>
      <button onClick={() => showDeleteProduct()}>DELETE PRODUCT</button>

      <Modal
        title={typeForm.title}
        showModal={showModal}
        closeDialog={toggle}
      >
        {typeForm.forms === FORMS.EDIT_PRODUCT ? (
          <EditProduct 
            product={product} 
            productEdited={(product) => {
              toggle()
              productEdited(product)
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