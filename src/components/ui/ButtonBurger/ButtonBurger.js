import React from 'react';
import * as PropTypes from 'prop-types';

import './ButtonBurger.sass';

const ButtonBurger = ({isMobileMenu, onClick}) => {
  return (
    <div className={isMobileMenu ? 'button-burger active' : 'button-burger'}
         onClick={() => onClick()}
    >
      <div/>
      <div/>
      <div/>
    </div>
  )
};

ButtonBurger.propTypes = {
  isMobileMenu: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

ButtonBurger.defaultProps = {
  onClick: () => {
  }
};

export default ButtonBurger;
