function longestString(arrayString){
  let longestString = '';
  for(let i = 0; i < arrayString.length;i++){
    let currentString = arrayString[i];
    if(currentString.length>longestString.length){
        longestString = currentString;
    }

  }
  return longestString;
}

let myString = ['apple','banana','pea'];

console.log(longestString(myString));




















