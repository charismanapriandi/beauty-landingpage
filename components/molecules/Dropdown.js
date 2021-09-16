import React from 'react'

const Dropdown = ({ label }) => {
  return (
    <div className="flex items-center">
      <p className="mr-1">{ label }</p>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.91668 3.54163L5.00001 6.45829L2.08334 3.54163" stroke="#313632" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default Dropdown
