import React from 'react';

import './NumberConverter.css';

// Componnets
import { NumberConverterBox } from '../../components/NumberConverter/Box/Box';
import { NumberConverterForm } from '../../components/NumberConverter/Form/Form';

export const ScreenNumberConverter = (props) => (
  <div className="ScreenNumberConverter">
    <NumberConverterBox>
      <NumberConverterForm></NumberConverterForm>
    </NumberConverterBox>
  </div>
)
