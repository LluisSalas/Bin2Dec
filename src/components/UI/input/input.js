import React from 'react';

import './input.css';

export const Input = ( { 
  handleChange, 
  name, 
  title,
   ...props 
  }) => {
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
          className="form-control" 
          onChange={handleChange}
          {...props} />
      
      </div>
    );
}