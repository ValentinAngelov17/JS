const numbers = {
    numberA: 5,
    numberB: 10,
  
    sum: function() {
      console.log(this.numberA + this.numberB); // => true
  
      function calculate() {
        // this is window or undefined in strict mode
        console.log(this); // => false
        return this.numberA + this.numberB;
      }
  
      return calculate.call(this);
    }
  };
  
  console.log(numbers.sum());


  //arrow function
  const numbers2 = {
    numberA: 5,
    numberB: 10,
    sum: function() {
      console.log(this === numbers2); // => true
  
      const calculate = () => {
        console.log(this === numbers2); // => true
        return this.numberA + this.numberB;
      }
  
      return calculate();
    }
  };
  
  numbers2.sum(); // => 15