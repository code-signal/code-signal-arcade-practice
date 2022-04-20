function solution(arg) {
}
  

0/300
function solution(s) {
    let count = 0;
    
    for (let i = 1;  i < s.length-2; i++){
        let a = s.slice(0, i);
        let b = s.slice(i, s.length-i+1); 
        let c = s.slice(s.length-1, s.length);
        console.log(i, a, b, c);
        if ( a != b && b != c && a != c) count++;  
        
    }
    for (let i = s.length-1;  i >= 1; i--){
        let c = s.slice(i, s.length);
        let b = s.slice(1, i); 
        let a = s.slice(0, 1);
        console.log(i, a, b, c);
        if ( a != b && b != c && a != c) count++;  
        
    }
    
    return count;
}
