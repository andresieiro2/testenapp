import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const [show, showMenu] = useState(false);

  return (
    <>
      <li className="nav-header">{props.title}</li>
      <li className="has-sub">
        <Link
          to={props.link || ''}
          onClick={e => {
            if (props.onClick) {
              props.onClick(e);
            } else if (!props.link) {
                e.preventDefault();
                showMenu(!show);
              }
          }}
        >
          {props.subMenu && <b className="caret"></b>}

          <i className="fa fa-th-large"></i>
          <span>{props.text}</span>
        </Link>
        {show && props.subMenu && (
          <ul className="sub-menu">
            {props.subMenu.map((subMenu, index) => (
              <li key={`sidebar-submenu-${index}`}>
                <Link to={subMenu.link} onClick={subMenu.onClick}>
                  {' '}
                  {subMenu.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default Header;
