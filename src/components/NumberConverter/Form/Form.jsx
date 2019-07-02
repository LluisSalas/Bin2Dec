import React, { Component } from 'react';

// Styles
import './Form.css';

// Components
import { Input } from '../../UI/Input/Input';

// Utils
import NumberConverter from '../../../utils/NumberConverter';

export class NumberConverterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryNumber: '',
      decimalNumber: ''
    }
    this.handleBinaryNumberChange = this.handleBinaryNumberChange.bind(this);
  }

  handleBinaryNumberChange($event) {
    this.setState({ 
      binaryNumber: $event.target.value,
      decimalNumber: NumberConverter.binaryToDecimal($event.target.value),
    });
  }

  render () {
    return (
      <div className="NumberConverterForm">
        <Input 
          id="binaryNumber" 
          name="binaryNumber"
          title="Enter binary number"
          value={this.state.binaryNumber}
          handleChange={this.handleBinaryNumberChange} />
        <br />
        <Input 
          id="decimalNumber" 
          name="decimalNumber"
          title="Decimal Number"
          value={this.state.decimalNumber}
          readOnly />
      </div>
    );        
  }
}
