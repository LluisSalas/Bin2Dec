import React from 'react';

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