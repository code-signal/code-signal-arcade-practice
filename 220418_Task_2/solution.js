function solution(a) {
    const numsMap = {};    
    const str = String(a.join(''));
    
    for (let i = 0; i < str.length; i++){
        const num = str[i];
        if (num in numsMap) numsMap[num]++;
        else numsMap[num] = 1;  
    }   
    
    let result = [];
    let maxnums = -Infinity;
    for (let nums in numsMap) {        
        if (maxnums < numsMap[nums]) maxnums = numsMap[nums];        
    }
    
    for (let nums in numsMap) {        
        if (numsMap[nums] === maxnums) result.push(Number(nums));        
    }    
    return result;
}