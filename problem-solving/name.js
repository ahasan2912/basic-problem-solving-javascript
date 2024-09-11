function nameFunction(name){
    const array = name.split(" ");
    let store = '';
    const newArray = [];
    for(let item of array){
        store = item.charAt(0).toUpperCase() + item.slice(1);
        newArray.push(store);
    }
    return newArray.join(" ");
}

const name = "ahasan habib siam";
let received = nameFunction(name);
console.log(received);


//array max
let numbers = [3, 7, 2, 8, 5];
let max = Math.max(...numbers);
let p = numbers.indexOf(max);

console.log(max,p); // Outputs: 8
