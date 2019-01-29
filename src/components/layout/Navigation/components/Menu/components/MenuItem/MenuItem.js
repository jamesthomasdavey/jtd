import React from 'react'
import PropTypes from 'prop-types';

const MenuItem = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

MenuItem.propTypes = {
  small: PropTypes.bool.isRequired
}

MenuItem.defaultProps = {
  small: false
}

export default MenuItem;