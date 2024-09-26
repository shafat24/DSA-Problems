// function isAnagram(s,t){
//     if(s.length !== t.length){
//         return false;
//     }

//     const sortedS = s.split('').sort().join('');
//     const sortedT = t.split('').sort().join('');

//     return sortedS === sortedT;
// }



function validAnagram(s,t){
  if(s.length !== t.length){
    return false
  }

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('')

  return sortedS === sortedT
 }

 console.log(
    validAnagram("anagrad","nagarad")
);

