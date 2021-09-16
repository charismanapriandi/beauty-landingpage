import React from 'react'

const NavIcon = ({ icon, withBadge, count }) => {
  return (
    <div className="relative">
      { icon }
      { withBadge && <span className="w-4 h-4 rounded-full absolute -top-1 bg-custom-orange text-white flex justify-center items-center -right-1 text-sm">{ count }</span> }
    </div>
  )
}

export default NavIcon
