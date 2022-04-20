function solution(s, t) {
    let result = 0;
    for (let i = s.length-1; i >= 0; i--){
        
        if (s[i].charCodeAt(0) >=48 && s[i].charCodeAt(0) <= 57){
            if ((s.slice(0, i) + s.slice(i+1)) < t) result++;    
        }
        
        
    }
    for (let i = t.length-1; i >= 0; i--)
        if (t[i].charCodeAt(0) >=48 && t[i].charCodeAt(0) <= 57){
            if ((t.slice(0, i) + t.slice(i+1)) > s) result++;
        }
    return result;
}

