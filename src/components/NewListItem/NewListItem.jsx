import React, { useState } from "react"
import Card from "../Card/Card"
import Modal from "../Modal/Modal"
import Input from "../FormElements/Input"

export default ({ addCard }) => {
  const [actionModal, toggleActionModal] = useState(false)
  const [desc, setDesc] = useState("")

  function cancel() {
    setDesc("")
    toggleActionModal(false)
  }

  function addNewCard() {
    if (!desc) {
      alert("Please enter description")
      return
    }
    addCard({ desc })
    toggleActionModal(false)
    setDesc("")
  }

  return (
    <div>
      <Card
        className="top-1 round-corners highlight-bg"
        onClick={() => toggleActionModal(true)}
      >
        <p>+ add card</p>
      </Card>
      {actionModal ? (
        <Modal onCancel={cancel} onConfirm={addNewCard}>
          <form
            onSubmit={e => {
              e.preventDefault()
              addNewCard()
            }}
          >
            <Input
              autoFocus
              value={desc}
              onChange={e => setDesc(e.target.value)}
              type="text"
              placeholder="Enter description"
              name="description"
            />
          </form>
        </Modal>
      ) : null}
    </div>
  )
}
