// function removeElement(arr,val){
//     let i = 0 ;

//     for(let j = 0; j<arr.length;j++){
//         if(arr[j] !== val){
//             arr[i] = arr[j];
//             i++;
//         }
//     }
//     return i;
// }

// let arr = [3,2,2,3,4,5,2];

// let val = 2;

// let result = removeElement(arr,val);

// console.log(arr.slice(0,result));


function removeElement(arr,val){
    let i = 0;

    for(let j =0;j<arr.length;j++){
        if(arr[j] !== val){
            arr[i] = arr[j];
            i++;
        }
    }
    return  i;
}

let arr1 = [3,2,2,4,5];

let val1 = 2;

let result2 = removeElement(arr1,val1);

console.log(arr1.slice(0,result2))