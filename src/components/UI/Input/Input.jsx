// React
import React from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Styles
import './Input.css';

export const Input = ( { 
  handleChange, 
  name, 
  title,
  valid,
  touched,
   ...props 
  }) => {
    const formControlClassName = ['form-control'];

    if (touched && !valid) {
      formControlClassName.push('control-error');
    }

    return (
      <div className="form-group">

        <label 
          htmlFor={name} 
          className="form-label">
          {title}
        </label>

        <input 
          type="text" 
          name={name}
          className={formControlClassName.join(' ')} 
          onChange={handleChange}
          {...props} />
      
      </div>
    );
}

Input.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  valid: PropTypes.bool,
  touched: PropTypes.bool
};

Input.defaultProps = {
  title: 'inputTitle',
  valid: false,
  touched: false
};