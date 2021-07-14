import React from "react";
import {Link} from "react-router-dom";


const MenuNav = () => {
  return (
      <div>
        <ul className='list-unstyled menu-nav'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>

  )
}

export default MenuNav;