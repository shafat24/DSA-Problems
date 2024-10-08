const productExceptSelf = function(nums){
    const n = nums.length;
    const output = new  Array(n);


    let leftProduct = 1;
    let rightProduct =1;

    for(let i=0; i<n;i++){
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    for(let i =n-1; i>=0 ;i--){
        output[i] *= rightProduct;
        rightProduct *= nums[i]; 
    }

    return output
}


console.log(

    productExceptSelf([2,2,2,2])
);
