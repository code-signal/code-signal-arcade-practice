function solution(s) {
    
    let testStr = s[0];    
    let result = s;
    let idx = [];
    while (true) {
        for (let i = 1; i < result.length; i++){
            testStr += s[i];
            console.log(testStr, isPalindrome(testStr));
            if (isPalindrome(testStr)){            
                idx.push(i); 
                console.log('idx: ', idx);          
            }       
            
        }
        result = result.slice(idx[idx.length1])
        console.log('result: ', result); 
    }
    console.log('idx: ', idx);
    return result;

}

function isPalindrome(s) {
    return s === reserve_str(s);
}

function reserve_str(s) {
    let result = '';
    for (let i = s.length-1; i >= 0; i--){
       result += s[i] ;
    }
    return result;
}