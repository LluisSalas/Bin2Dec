import React, { Component } from 'react';

// Components
import { Input } from '../../UI/Input/Input';

// Utils
import { NumberConverter } from '../../../utils/NumberConverter';
import { Validation } from '../../../utils/Validation';

export class NumberConverterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        binaryNumber: {
          id: 'binaryNumber',
          name: 'binaryNumber',
          title: 'Enter binary number',
          value: '',
          valid: true,
          touched: false,
          validationRules: {
            binaryNumber: true
          }
        },
        decimalNumber: {
          id: 'decimalNumber',
          name: 'decimalNumber',
          title: 'Decimal Number',
          value: ''
        }
      }
      
    }
    this.changeHanndler = this.changeHanndler.bind(this);
  }

  changeHanndler($event) {
    const name = $event.target.name;
    const value = $event.target.value;
    
    const updatedControls = {
	    ...this.state.formControls
    };
    const updatedFormElement = {
	    ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = Validation.validateField(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    if ( updatedFormElement.name === 'binaryNumber' && updatedFormElement.valid ) {
      const decimalFormElement = {
        ...updatedControls['decimalNumber']
      };
      decimalFormElement.value = NumberConverter.binaryToDecimal(updatedFormElement.value);
      updatedControls['decimalNumber'] = decimalFormElement;
    }

    this.setState({
    	formControls: updatedControls
    });
  }

  render () {
    return (
      <form className="NumberConverterForm">
        <Input 
          id={this.state.formControls.binaryNumber.id}
          name={this.state.formControls.binaryNumber.name}
          title={this.state.formControls.binaryNumber.title}
          value={this.state.formControls.binaryNumber.value}
          touched={this.state.formControls.binaryNumber.touched}
          valid={this.state.formControls.binaryNumber.valid}
          handleChange={this.changeHanndler} />
        <br />
        <Input 
          id={this.state.formControls.decimalNumber.id}
          name={this.state.formControls.decimalNumber.name}
          title={this.state.formControls.decimalNumber.title}
          value={this.state.formControls.decimalNumber.value}
          readOnly />
      </form>
    );        
  }
}
