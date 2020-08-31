import React, { useState, useEffect } from "react"
import ModuleStyle from "./Modal.module.scss"

export default (props) => {

  function handleKeyUp(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      props.onCancel();
      window.removeEventListener("keyup", handleKeyUp, false);
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
    }
  })

  return (
    <div className={ModuleStyle.modalWrapper}>
    <div className={ModuleStyle.modal}>
      {props.children}
      <div className={ModuleStyle.btnContainer}>
        <button className="btn cancel" onClick={props.onCancel}>
          {props.cancelBtnText || "Cancel"}
        </button>
        {props.hideButton ? null : (
          <button className="btn confirm" onClick={props.onConfirm}>
            Confirm
          </button>
        )}
      </div>
    </div>
  </div>
  )
}
