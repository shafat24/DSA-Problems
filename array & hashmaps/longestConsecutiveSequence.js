
function longestConsecutiveSequence(nums){
    if(nums === null || nums.length === 0){
        return 0
    }

    const set = new Set(nums);

    let maxSeq = 0;
    for(let num of set){
        if(set.has(num - 1)){
            continue
        }

        let currNum = num;
        let currMax = 1;

        while(set.has(currNum +1)){
            currNum ++
            currMax ++
        }
      maxSeq = Math.max(currMax,maxSeq)
    }
    return maxSeq;

}

console.log(
    longestConsecutiveSequence([100,4,200,1,2,3])
)