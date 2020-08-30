import React from "react"
import StyleModule from "./Card.module.scss"

export default props => {
    let className = props.className || "";
    className += ` ${StyleModule.card}`;
  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  )
}
