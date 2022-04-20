function solution(numbers) {
    let num = numbers;
    let flag = 0;
    let result = [];
    for (let i = 1; i < numbers.length-1; i++){
        if ((num[i-1] < num[i] && num[i] > num[i+1]) ||
            (num[i-1] > num[i] && num[i] < num[i+1])) {
                flag = 1;
            } else {
                flag = 0
            }
        result.push(flag);    
    }
    return result;
}
