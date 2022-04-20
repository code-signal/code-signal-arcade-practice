function solution(a) {
    let result = false;
    let copyA =[]
    
     
        
    if (a.length % 2 == 0) {
        for (let i = 0; i < Math.floor((a.length)/2); i++){
            copyA.push(a[i]);
            copyA.push(a[a.length -1 -i]);                
        }         
    } else {
        for (let i = 0; i < Math.floor((a.length)/2); i++){
            copyA.push(a[i]);
            copyA.push(a[a.length -1 -i]);                
        }         
        copyA.push(a[Math.floor((a.length)/2) ]);
    }
    
    for ()     
    
    console.log('2: ',copyA)
    
}

  