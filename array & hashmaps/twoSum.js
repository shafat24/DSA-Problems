function twoSum(nums,target){
    const numSet = new Set();
    for(let i =0;i<nums.length;i++){
        const complement = target - nums[i];

        if(numSet.has(complement)){
            const complementIndex = nums.indexOf(complement);

            return [complementIndex,i]
        }

        numSet.add(nums[i]);
    }
}

const nums = [2,1,7,8];
const target = 9;


console.log(

    twoSum(nums,target)
);


