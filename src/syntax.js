//ex1
let func1 = (num) => {
    if (num % 2 === 0) {
      return num % 10;
    } else {
      return parseInt(num.toString().charAt(0));
    }
  }

// ex2

let func2 = (num) => {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }

// ex4

let power3 = (x, y) => {
    if (y === 0) {
      return 1;
    } else {
      return x * power(x, y - 1);
    }
  }


//ex 5 
let func5 = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum / nums.length;
  }

// ex6
let func6 = (nums) => {
    return nums.slice().sort((a,b) => a-b);
  }