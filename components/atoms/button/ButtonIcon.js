import React from 'react'

const ButtonIcon = ({ icon, primary, primaryOutline }) => {
  return (
    <button className={`${primary && 'bg-gradient-to-r from-custom-cream-400 to-custom-cream-300'} ${primaryOutline && 'border-2 border-custom-cream-400'} items-center lg:px-6 lg:py-3 px-4 py-2 flex`}>
      <span className="">{ icon }</span>
    </button>
  )
}

export default ButtonIcon