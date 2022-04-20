function solution(numbers, left, right) {
    let result = [];
    let temp = 1;
    for (let i = 0; i < numbers.length; i++){
        temp = numbers[i] / (i+1);        
        if (numbers[i] % (i+1) == 0) {            
            if (temp >= left && temp <= right){
                result.push(true);
            } else {
                result.push(false);
            }           
        } else {
            result.push(false) ;
        } 
            
    } 
    return result;
}
