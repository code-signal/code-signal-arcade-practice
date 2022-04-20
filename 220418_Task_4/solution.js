// 250/300

function solution(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) { 
            arr.push(a[i] + '' + a[j]);     
        }    
    }
    
    let result = 0
    for (let i = 0; i < arr.length; i++){
        result += Number(arr[i]);    
    }
    return result;
}
