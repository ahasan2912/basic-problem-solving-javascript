function myFunction(array){
    console.log(array);
    let sum = 0, c = 0;
    for(let item of array){
        sum += item.age;
        c++;
    }
    console.log(sum/c);
}
const array = [
    {
        name: "Ahasan",
        age: 12,
        class: 'Bsc 4th year',
    },
    {
        name: "Ahasan2",
        age: 13,
        class: 'Bsc 4th year',
    },
    {
        name: "Ahasan3",
        age: 15,
        class: 'Bsc 4th year',
    },
]
myFunction(array);