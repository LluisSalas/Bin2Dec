// React
import React from 'react';

// Styled Componentsç
import styled from 'styled-components';

// Componnets
import { NumberConverterBox } from '../../components/NumberConverter/Box/Box';
import { NumberConverterForm } from '../../components/NumberConverter/Form/Form';

const StyledScreenNumberConverter = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ScreenNumberConverter = (props) => (
  <StyledScreenNumberConverter>
    <NumberConverterBox>
      <NumberConverterForm></NumberConverterForm>
    </NumberConverterBox>
  </StyledScreenNumberConverter>
);