function isValidString(str) {

let opposites = {
  "]": "[",
  "}": "{",
  ")": "("
}
let orderStack = [];
let isValid = false;
let arrString = str.split('');

for (let i = 0; i < arrString.length; i++) {
  let lastStackItem = orderStack[orderStack.length-1];
  if (lastStackItem != undefined && lastStackItem == opposites[arrString[i]]){
    orderStack.pop();
  }
  else {
    orderStack.push(arrString[i])
  }
}

if (orderStack.length === 0) {
  isValid = true;
}

return isValid;

}

console.log(isValidString('{}[]'))
