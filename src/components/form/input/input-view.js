import React from 'react';
import '../form.css';
import './input.css';

const Input = (handleChange, name, title, ...props) => {
  return (
    <div className="form-group">

      <label 
        htmlFor={name} 
        className="form-label">
        {title}
      </label>

      <input 
        type="text" 
        className="form-control" 
        onChange={handleChange}
        {...props} />
    
    </div>
  );
}

export default Input;