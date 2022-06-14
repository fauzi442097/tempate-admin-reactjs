import { useState } from 'react';
import { NavLink, Link, useLocation  } from 'react-router-dom'

const Menu = (props) => {

   return (
      <li> 
         <NavLink to={props.url} className={props.class + ' ai-icon'} aria-expanded="false">
            <i className={props.icon}></i>
            <span className="nav-text">{props.name}</span>
         </NavLink>
         {props.children}
      </li>
   )
}

Menu.defaultProps = {
   class : ''
}

export default Menu