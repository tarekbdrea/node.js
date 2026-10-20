const num = 237;

for (let j = 2; j < num; j++) {
    let IsPrime = true;

    for (let i = 2; i <= Math.sqrt(j); i++) {
        if (j % i === 0) {
            IsPrime = false;
            
        }
    }
    if(IsPrime)
    console.log(j);
}s