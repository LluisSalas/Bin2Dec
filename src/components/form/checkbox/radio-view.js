import React from 'react';
import '../form.css';
import './radio.css';

const Radio = (handleChange, name, title, options, ...props) => {

    return (
        <div className="form-group">

            {
                options.map(option => (
                    <div 
                        className="form-group" 
                        key={option.value}>
                        <label>{option.displayValue}</label>
                        <input 
                            type="radio"
                            className="form-control"
                            name={name}
                            value={option.value}
                            onChange={props.handleChange} />
                    </div>
                ))
            }

        </div>
    );

}

export default Radio;