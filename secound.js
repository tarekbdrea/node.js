const num = 237;
// checks how manny number from 2 aal the way to 237 are prime and print them
for (let j = 2; j < num; j++) {
    let IsPrime = true;// boolean flage defaulte value true

    for (let i = 2; i <= Math.sqrt(j); i++) {
        if (j % i === 0) {//checks if i % j ===0  
            IsPrime = false;
            
        }
    }
    if(IsPrime)// if the number is prime (IsPrime == true)
    console.log(j);//print the number
}s