import React from 'react'
import "../css/SidebarOption.css";

function SidebarOption({ active, title, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption-active"}`}>
        <Icon />
        <h2>{title}</h2>
    </div>
  )
}

export default SidebarOption