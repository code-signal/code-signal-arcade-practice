function solution(n, a) {
    let arr = [...a]
    arr.unshift(0);
    arr.push(0);
    let result = [];
    for (let i = 0; i < a.length; i++){
        result[i] = arr[i] + arr[i+1] + arr[i+2]; 
    }
    return result;
}
