// React
import React, { Component } from 'react';

// Styles
import './App.css';

// Utils
import NumberConverter from '../utils/NumberConverter';

// Form Components
import { Input } from '../components/UI/input/input';

class App extends Component {

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

  render() {

    return (
      <div className="App">
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

export default App;
