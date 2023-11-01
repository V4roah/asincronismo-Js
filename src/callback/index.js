function suma(num1, num2){
    return num1 + num2;

}

function calc(num1, num2, callback){
    return callback(num1, num2);
}   

console.log(calc(5, 5, suma));

setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000);

function gretting(name){
    console.log(`Hola ${name}`);

}

setTimeout(gretting, 2000, "Daniel")