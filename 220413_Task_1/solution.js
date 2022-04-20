function solution(numbers, left, right) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % (i+1) === 0) {
             ((numbers[i]/(i+1) >= left) && (numbers[i]/(i+1) <= right)) ?result.push(true): result.push(false);
        } else {
            result.push(false);    
        }
        
    }
    return result;
}
