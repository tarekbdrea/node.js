const num  = [1,2,3,0,0,0,2,3];// array
let count = 0 ;

let is0 = false;
for(let i = 0 ; i < num.length ;i++){// checks the array starts at 0 and ends at num.length
    count += num[i] === 0?1:0;// checks if the numeber from the array is 0 if yes add 1 to count 
    

    

}
console.log(count);// print the value of count

