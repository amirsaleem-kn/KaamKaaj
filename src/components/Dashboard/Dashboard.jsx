/**
 * @author Amir Saleem
 * @fileoverview Main Dashboard Component ( Root Level Component )
 */

import React, { Component } from "react"
import StyleModule from "./Dashboard.module.scss"

import NewList from "../NewList/NewList"
import List from "../List/List"

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      cards: [],
    }
    this.addNewList = this.addNewList.bind(this)
    this.setLists = this.setLists.bind(this)
    this.addCard = this.addCard.bind(this)
    this.setCards = this.setCards.bind(this)
    this.shiftCardToList = this.shiftCardToList.bind(this)
  }

  componentDidMount() {
    let list = this.getLists()
    let cards = this.getCards()
    this.setState({ lists: list ? list : [], cards: cards ? cards : [] })
  }

  getLists() {
    let list = sessionStorage.getItem("list")
    if (list) {
      list = JSON.parse(atob(list))
    }
    return list
  }

  setLists(list) {
    sessionStorage.setItem("list", btoa(JSON.stringify(list)))
    this.setState({ lists: list })
  }

  getCards() {
    let card = sessionStorage.getItem("card")
    if (card) {
      card = JSON.parse(atob(card))
    }
    return card
  }

  setCards(cards) {
    sessionStorage.setItem("card", btoa(JSON.stringify(cards)))
    this.setState({ cards })
  }

  /**
   * @description add a new list
   * @param {object} newList
   * @param {string} newList.title
   */
  addNewList(newList) {
    const list = this.getLists() || []
    newList.id = list.length + 1
    list.push(newList)
    this.setLists(list)
  }

  addCard(card) {
    const cards = this.getCards() || []
    card.id = cards.length + 1
    cards.push(card)
    this.setCards(cards)
  }

  shiftCardToList(cardId, destListId) {
    const cards = this.getCards() || []
    const cardIndex = cards.findIndex(c => c.id === +cardId)
    if (cards[cardIndex].listId  === destListId) {
      return;
    }
    cards[cardIndex].listId = destListId
    this.setCards(cards)
  }

  render() {
    const { lists, cards } = this.state
    return (
      <div>
        <h2
          className="text-center white fixed"
          style={{ width: "100%", top: "1rem", padding: "1rem 0" }}
        >
          KaamKaaj
        </h2>
        <div className={StyleModule.dashboard}>
          {lists.map(list => (
            <List
              key={list.id}
              data={list}
              cards={cards}
              addCard={this.addCard}
              shiftCardToList={this.shiftCardToList}
            />
          ))}
          <NewList addNewList={this.addNewList} />
        </div>
        <p
          className={"white"}
          style={{
            position: "fixed",
            bottom: "0.4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          Made with <span style={{ color: "red" }}>&#9829;</span> by{" "}
          <a
            style={{ color: "white" }}
            href="https://github.com/amirsaleem-kn/KaamKaaj"
            target="_blank"
          >
            Amir Saleem
          </a>
        </p>
      </div>
    )
  }
}
