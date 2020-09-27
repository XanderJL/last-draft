import React from "react"
import ConvertKitForm from "convertkit-react"
import Modal from "./Modal"

const formConfig = {
  formId: 1301591,
  template: "Charlotte",
}

const ConvertKitModal = () => {
  return (
    <Modal>
      <ConvertKitForm {...formConfig} />
    </Modal>
  )
}

export default ConvertKitModal
