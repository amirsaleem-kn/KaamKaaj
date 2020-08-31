import React, { Component } from "react"
import StyleModule from "./List.module.scss"
import ListItem from "../ListItem/ListItem"
import Card from "../Card/Card"
import NewListItem from "../NewListItem/NewListItem"
import { Draggable, Droppable } from "react-drag-and-drop"

export default ({ data, cards, addCard, shiftCardToList }) => {

  function addNewCard(card) {
    const listId = data.id
    addCard({ ...card, listId })
  }

  function onDragEnd(e, pos) {
    // console.log(e.pageY)
    // console.log(pos);
  }

  function onDrop(c, a) {
    if (!c) {
      return;
    }
    const cardId = c.card;
    const destListId = data.id;
    shiftCardToList(cardId, destListId);
  }

  function renderCards() {
    const listCards = cards.filter((c) => c.listId === data.id);
    return listCards.map((card, index) => <ListItem onDragEnd={onDragEnd} pos={index} key={card.id} card={card} listId={data.id} />)
  }

  return (
    <Droppable
      types={["card"]}
      onDrop={onDrop}
    >
      <Card className={"left-1 round-corners wide-2"}>
        <h5>{data.title}</h5>
        <div className="max-height-90">
          {renderCards()}
          <NewListItem addCard={addNewCard} />
        </div>
      </Card>
    </Droppable>
  )
}
