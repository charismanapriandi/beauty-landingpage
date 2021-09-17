import React from 'react'

const Button = ({ label, withIcon, icon, primary, primaryOutline }) => {
  return (
    <button className={`${primary && 'bg-gradient-to-r from-custom-cream-400 to-custom-cream-300'} ${primaryOutline && 'border-2 border-custom-cream-400'} items-center lg:px-6 lg:py-3 px-4 py-2 flex`}>
      <p className={`${primary && 'text-white'} ${primaryOutline && 'text-custom-cream-400'} flex-1 justify-center flex font-bold`}>{ label }</p>
      {
        withIcon
          && <span className="ml-9">{ icon }</span>
      }
    </button>
  )
}

export default Button
