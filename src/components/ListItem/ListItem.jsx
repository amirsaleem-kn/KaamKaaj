import React, { useState } from "react"
import StyleModule from "./ListItem.module.scss"
import Card from "../Card/Card"
import Modal from "../Modal/Modal"
import { Draggable, Droppable } from "react-drag-and-drop"

export default ({ card, listId }) => {
  const [descModal, setDescModal] = useState(false)
  return (
    <div>
      <Draggable type={"card"} data={`${card.id}`}>
        <Card
          className="top-1 round-corners"
          onClick={() => setDescModal(true)}
        >
          <p>{card.desc}</p>
        </Card>
      </Draggable>
      {descModal ? (
        <Modal
          hideButton={true}
          cancelBtnText={"Close"}
          onCancel={() => setDescModal(false)}
        >
          <div className="auto-pad">
            <p>{card.desc}</p>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}
