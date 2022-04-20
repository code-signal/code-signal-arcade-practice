function solution(a) {
    let b = []
    if (a.length % 2 != 0) b[a.length-1] = a[(a.length-1)/2];
    for (let i = 0; i < (a.length-1)/2; i++) {
        b[2*i] = a[i];
        b[2*i+1] = a[a.length-1-i]
    }
    console.log(b);
    for (let i = 1; i < b.length; i++){
        if (b[i-1] >= b[i]) return false;
    }
    return true;
}
