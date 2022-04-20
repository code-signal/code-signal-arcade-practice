function solution(a, b, k) {
    let result = 0;   
    
    for (let i = 0; i < a.length; i ++) {
        let base = 1;
        let count = 0
        while((String(b[a.length-i-1]).length - count) > 0){
            base *= 10;
            count++;
        }
        
        if(a[i] *  base + b[a.length-i-1] < k) {
                       
            result++ ;   
        }
    }
    return result;
}

  