import React from "react"

export default () => {
  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    ></div>
  )
}
