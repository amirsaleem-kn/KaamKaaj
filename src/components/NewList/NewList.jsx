import React, { useState } from "react"
import Card from "../Card/Card"
import StyleModule from "./NewList.module.scss"
import Modal from "../Modal/Modal"
import Input from "../FormElements/Input"

export default ({ listCount = 0, addNewList }) => {
  const title = listCount > 0 ? "+ Add Another List" : "+ Add List"
  const [actionModal, toggleActionModal] = useState(false);
  const [listTitle, setListTitle] = useState("");

  function addList() {
    if (!listTitle) {
        alert("Please enter title");
        return;
    }
    addNewList({ title: listTitle, userId: 1 });
    toggleActionModal(false);
    setListTitle("");
  }

  function cancel() {
    setListTitle("");
    toggleActionModal(false)
  }

  return (
    <div>
      <Card className="left-1 wide-2 right-1 round-corners" onClick={() => toggleActionModal(true)}>
        <h5>{title}</h5>
      </Card>
      {actionModal ? (
        <Modal
          onCancel={cancel}
          onConfirm={addList}
        >
          <form onSubmit={(e) => { e.preventDefault(); addList() }}>
            <Input autoFocus value = {listTitle} onChange = {(e) => setListTitle(e.target.value)} type="text" placeholder = "Enter title" name="title"/>
          </form>
        </Modal>
      ) : null}
    </div>
  )
}
