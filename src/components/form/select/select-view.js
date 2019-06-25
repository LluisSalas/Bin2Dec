import React from 'react';
import '../form.css';
import './select.css';

const Select = (handleChange, name, title, options, ...props) => {

    return (
        <div className="form-group">
          <label 
            htmlFor={name} 
            className="form-label">
            {title}
          </label>

          <select 
            className="form-control" 
            onChange={handleChange} 
            {...props}>
            {
              options.map(option => (
                <option value={option.value}>
                  {option.displayValue}
                </option>
              ))
            }
          </select>
        </div>
    );
}

export default Select;