import React from 'react'

function Button({onclick,className=null,text=null,icon=null, type=null}) {
  return (
    <>
    <button type={type} onClick={onclick} className={className}>{icon}{text}</button>
    </>
  )
}

export default Button