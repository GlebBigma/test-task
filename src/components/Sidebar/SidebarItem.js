import React from 'react';
import {NavLink} from 'react-router-dom';
import * as PropTypes from 'prop-types';

const SidebarItem = ({href, label, icon, info, onClick}) => {
  return (
    <NavLink to={href}
             className="sidebar__item"
             onClick={() => onClick()}
    >
      <div>
        {icon}
        {label}
      </div>
      {
        info && <div className="sidebar__item__info">
          {info}
        </div>
      }
    </NavLink>
  )
};

SidebarItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
  info: PropTypes.string,
  onClick: PropTypes.func
};

SidebarItem.defaultProps = {
  icon: {},
  info: '',
  onClick: () => {
  }
};

export default SidebarItem;
