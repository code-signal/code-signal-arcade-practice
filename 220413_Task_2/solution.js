function solution(a) {
    const numsMap = {};    
    const str = String(a.join(''));
    
    for (let i = 0; i < str.length; i++){
        const num = str[i];
        if (num in numsMap) numsMap[num]++;
        else numsMap[num] = 1;  
    }
    let result = [];
    numsMap.forEach(function(value, key) {
        console.log(key, value);
    })
}
