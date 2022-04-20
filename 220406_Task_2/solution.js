// 260/300
function solution(numbers) {
    let result = false;       
     
    if (numbers.length == 1) return true;
    for (let i = 0; i < numbers.length; i++){
        let num = [...numbers];        
        if (isIncrease(num)) return true; 
        
        num[i] = swap(num[i]);                
        if (isIncrease(num)) return true;          
    }
    return false;
        
    function swap (n) {
        return Number(String(n).split('').reverse().join(''));
    }
    
    function isIncrease(num){
        
        for (let i = 0; i < num.length-1; i++)
            if (num[i] >= num[i+1])  return false;
     
        return true;        
    }