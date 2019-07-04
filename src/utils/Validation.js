export class Validation  {
  static validateField(fieldValue, validationRules) {
    let isValid = true;
  
    for (let rule in validationRules) {
      switch (rule) {
          case 'binaryNumber': 
            isValid = isValid && Validators.binaryNumberValidator(fieldValue); 
            break;
          default: 
            isValid = true;
      }
    }
    
    return isValid;
  }
}

class Validators {
  static binaryNumberValidator(fieldValue) {
    const regex = /^[01]+$/gm;
    return regex.test(fieldValue);
  }
}