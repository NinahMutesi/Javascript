
//for (initializatio, condition, increment/decrement){
//any code runs here
//}

for (let number= 0; number<=5; number++) {
    consolelog ( `${number}*${number} = ${number*number}`);
};

let numbers =[1, 2, 3,4, 5];
let sum =0;
for( let i=0; i<numbers.length; i++){
    sum = sum+numbers[i];
};

/* the sum is 0, thus the index[i] is 0
so sum(0)+number[i]index at 0 being 1 = 0+1=1
then the new sum is (1)
so sum + number[i]index at 1 being 2  = 1+2=3*/
