import React from "react"
import ModuleStyle from "./Modal.module.scss"

export default props => (
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
