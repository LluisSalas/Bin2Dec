import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../../../../test/test.util';

import { Input } from './Input';

import checkPropTypes from 'check-prop-types';

const defaultProps = {
  name: 'inputName',
  title: 'inputTitle',
  valid: false,
  touched: false
};

const setup = ( props = {} ) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
});


describe('input label', () => {
  let wrapper;
  const labelText = 'Test Label';

  beforeEach(() => {
    wrapper = setup({
      title: labelText
    });
  });

  test('renders without crash', () => {
    const input = findByTestAttr(wrapper, 'input-label');
    expect(input.length).toBe(1);
  });

  test('renders the correct text passed by props', () => {
    const input = findByTestAttr(wrapper, 'input-label');
    expect(input.text()).toBe(labelText);
  });
});

describe('input control', () => {
  let wrapper;
  const controlValue = 'Test Value';

  beforeEach(() => {
    wrapper = setup({
      value: controlValue
    });
  });

  test('renders without crash', () => {
    const input = findByTestAttr(wrapper, 'input-control');
    expect(input.length).toBe(1);
  });

  test('has the initial value passed by props', () => {
    const input = findByTestAttr(wrapper, 'input-control');
    expect(input.prop('value')).toBe(controlValue);
  });
});
