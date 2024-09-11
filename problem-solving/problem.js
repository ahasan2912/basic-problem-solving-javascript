//1 inch to feet
function inchFeet(inch) {
    let feet = parseInt(inch / 12)
    let inch2 = inch % 12;
    const total = `Height ${feet} feet ${inch2} inch`;
    return total;

}
let inch = 65;
let value = inchFeet(inch);
console.log("01/ ",value);

//2 km to mile
//1 km to 0.621371;

function KmToMile(km) {
    let mile = km * 0.621371;
    return mile;
}

let km = 420;
let result = KmToMile(km);
console.log("02/ ", parseFloat(result.toFixed(3)));

//03 Leap Year

function leapYear(year) {
    let str = "";
    if (year % 4 === 0 && year % 100 !== 0) {
        str = "Leap Year";
    }
    else if (year % 400 === 0) {
        str = "Leap Year";
    }
    else {
        str = "Not Leap Year";
    }
    return str;
}

let year = 2000;
let store = leapYear(year);
console.log("03/ ", store);

//04 array even and odd average

function oddEven(array) {
    let oddSum = 0, evenSum = 0, len = array.length, c1 = 0, c2 = 0;
    const oddArray = [];
    const evenArray = [];
    for (let item of array) {
        if (item % 2 === 0) {
            evenArray.push(item);
            evenSum += item;
            c1++;
        }
        else {
            oddArray.push(item);
            oddSum += item;
            c2++;
        }
    }
    let evenAvg = evenSum / c1;
    let oddAvg = oddSum / c2;
    let result = `Even Array ${evenArray} and Odd Array ${oddArray}. Even array Avg ${evenAvg} and Odd array Avg ${oddAvg}`;
    return result;
}

const array = [1, 2, 3, 4, 14, 6, 7, 8, 12, 10];
let avg = oddEven(array);
console.log("04/ ",avg);

// 05 Duplicate item Remove

function duplicate(array){
    const duplicateItem = [];
    const removeDublicateItem = [];
    const singleItem = [];
    for(let item of array){
        if(removeDublicateItem.includes(item) === false){
            removeDublicateItem.push(item);
        }
        else{
            duplicateItem.push(item);
        }
    }
    for(let i of removeDublicateItem){
        if(duplicateItem.includes(i) === false){
            singleItem.push(i);
        }
    }
    const str = `Remove DublicateItem ${removeDublicateItem}, duplicateItem ${duplicateItem}, SingleItem ${singleItem}`;
    return str;
}

const array2 = [1, 2, 3, 4, 1, 2, 3, 4, 5, 8, 10, 7, 10];
let newArray = duplicate(array2);
console.log("05/ ",newArray);