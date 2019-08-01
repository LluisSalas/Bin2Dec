// React
import React from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Styled components
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 50%;
  padding: 10px; 
  border: ${props => props.hasError ? '1px solid red' : '1px solid #ccc'}
`;

export const Input = ( { 
  handleChange, 
  name, 
  title,
  valid,
  touched,
   ...props 
  }) => {
    const hasError = touched && !valid;

    return (
      <>
        <Label 
          data-test="input-label" 
          htmlFor={name}>
          {title}
        </Label>

        <StyledInput
          data-test="input-control" 
          type="text" 
          name={name}
          onChange={handleChange}
          hasError={hasError}
          {...props} />
      </>
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