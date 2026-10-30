console.log("Hello, World!");
let a;
a="This is a test string.";
let b;
b=123;
let c;
c=true;
let d;
d=null;
let e;
e=9.00;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let n=20;
for(let i=0;i<n;i++){
    if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}
