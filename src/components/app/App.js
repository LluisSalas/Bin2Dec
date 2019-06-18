import React, { Component } from 'react';
import './App.css';
import NumberConverter from '../../utils/NumberConverter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      binaryNumber: '',
      decimalNumber: ''
    }
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
        <label htmlFor="binaryNumber">Enter binary number</label>
        <br />
        <input 
          id="binaryNumber" 
          value={this.state.binaryNumber}
          onChange={($event) => this.handleBinaryNumberChange($event)} />
        <br />
        <label htmlFor="decimalNumber">Decimal Number</label>
        <br />
        <input 
          id="decimalNumber" 
          value={this.state.decimalNumber}
          readOnly />
      </div>
    );
  }

}

export default App;
