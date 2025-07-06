import React from 'react'

export default function Button({title, onClick,...props}) {
  return (
    <button onClick={onClick} {...props}>
        {title}
    </button>
  )
}
