function solution(numbers) {
    let result = []
    for (let i = 1; i < numbers.length-1; i++){
        if (( numbers[i-1] < numbers[i] && numbers[i] > numbers[i+1]) ||
        ( numbers[i-1] > numbers[i] && numbers[i] < numbers[i+1])){
            result.push(1);
        } else {
            result.push(0);
        }
    }
    return result;
}
