


function findZeroTriplets(arr){
    let found = false;

    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;j<arr.length;j++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    console.log(arr[i],arr[j],arr[k])
                    found = true;
                }
            }
        }
    }
    if(!found){
        console.log("NO TRIPLETS FOUND")
    }
}

let arr = [5,-2,3,4];

findZeroTriplets(arr);
