// 1 Celsius ot Fahrenheit.
function temperature(celsius){
    let F =((celsius + (32 * (5/9))) * (9/5)).toFixed(2);
    return Number(F);
}

let celsius = 32;
let value = temperature(celsius);
console.log("01/ ", value);

// 2 countElement of Array

function countElement(array,find){
    let c = 0
    for(let item of array){
        if(item === find){
            c++;
        }
        else{
            c=0
        }
    }
    return c;
}

const array = [6,11,12,98, 5 ,5 ,5];
let find = 5;
let result = countElement(array,find);
console.log("02/ ", result);

// 03 count vowel and string

function countVowel(str){
    let c = 0
    for(let item of str){
       if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u' || item === 'A' || item === 'E' || item === 'I' || item === 'O' || item === 'U'){
        c++
       }
    }
    return c;
}
const str = "I am learnng Programmng";
let result2 = countVowel(str);
console.log("03/ ", result2);

//04 Longest word in a given string
function longestWordCount(str){
    let count = 0, store = 0;
    const array = str.split(' ');
    const newArray = [];
    for(let item of array){
        newArray.push(item.length);
    }
    let max = Math.max(...newArray);
    let index = newArray.indexOf(max);
    return array[index];
}

const word = "I am learning Programming to become a programmer";
let longestWord = longestWordCount(word);
console.log('04/ ',longestWord);

//05 Generate a random number between 10 to 20.

const randomNum = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(randomNum);