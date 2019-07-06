import React from 'react';

// Styled components
import styled from 'styled-components';

const StyledNumberConverterBox = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  border-top: 8px solid rgb(48, 5, 73);
  text-align: center;
  box-shadow: 3px 4px 6px 0px rgba(82,82,82,1);
  padding: 10px;
`;

export const NumberConverterBox = (props) => (
  <StyledNumberConverterBox>
    { props.children }
  </StyledNumberConverterBox>
);