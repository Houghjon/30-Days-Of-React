//#1
const emptyarr = []
console.log(emptyarr)

//#2, #3, #4
const fivearr = [1,2,3,4,5,6]
console.log(fivearr)

console.log("length of array is: " + fivearr.length)

let firstElement = fivearr[0]
let lastElementIndex = fivearr.length - 1
let middleElementIndex = Math.floor(fivearr.length / 2)

console.log("First element is: " + firstElement + " Last element is: " + fivearr[lastElementIndex]+ "Middle element is: " + fivearr[middleElementIndex])

//#5

const mixedDataTypes = [
    'Jonathan',
    25,
    {country: 'Denmark', city: "Copenhagen" },
    true,
    "Male",
    183
]
console.log(mixedDataTypes)

//#6, #7, #8, #9

let Companies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]

console.log(Companies)

console.log("The number of comapnies is: " + Companies.length)

let comLastElementIndex = Companies.length - 1
let comMiddleElementIndex = Math.floor(Companies.length / 2)

console.log("First company is: " + Companies[0] + " Middle company is: " + 
" Last company is: " + Companies[comLastElementIndex])

//#10

for (let x = 0; Companies.length > x; x++) {
    console.log(Companies[x])
    
}

//#11

toUpper = function (x){
    return x.toUpperCase();
};

Companies = Companies.map(toUpper);
for (let x = 0; Companies.length > x; x++) {
    console.log(Companies[x])
    
}

//#12

console.log(Companies[0], ",", Companies[1], ",", Companies[2], ",", Companies[3], ",", 
Companies[4], ",", Companies[5], ",", Companies[6], " are big IT companies.")

//#13

    var count=Companies.length;
    for(var i=0;i<count;i++)
    {
        if(Companies[i]==='FACEBOOK'){
            console.log(Companies[i])}
            
         {
            console.log("Company not found.");}
    } 
   
//#14