//#1 Acess the two arrays in different js files. Printing and manipulating them from main.js
console.log(countries)
countries.pop()
console.log(countries)

console.log(webTechs)
webTechs.pop()
console.log(webTechs)


//#2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//removing punctuation
text = text.replace(/[^\w\s]|_/g, "")
console.log(text)
//creating new var textArray which is an arary, and using .split to split each element of the array by a space
textArray = text.split(" ")
console.log(textArray)
console.log(textArray.length)

//#3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add meat at the beginning
shoppingCart.unshift("Meat")
console.log(shoppingCart)
//add sugar at the end of array
shoppingCart.push("Sugar")
console.log(shoppingCart)
//finding index of honey and using this index to splice the list so it does not contain honey
honeyIndex = shoppingCart.indexOf('Honey')
shoppingCart.splice(honeyIndex, 1)
console.log(shoppingCart)
//Finding index of tea and using this index to change the given element from 'tea' to 'green tea'
teaIndex = shoppingCart.indexOf('Tea')
shoppingCart[teaIndex] = 'Green Tea'
console.log(shoppingCart)

//#4
let ethiopia = 'Ethiopia'
//check if Ehtiopia exists in array, if not add the country to array with .push, if it does prints in uppercase
countries.indexOf(ethiopia) === -1 ? countries.push(ethiopia) : console.log(ethiopia.toUpperCase())
console.log(countries)

//#5
let sass = 'Sass'
//same methodas #4 to check for Sass and add it if it does not exist
webTechs.indexOf(sass) == -1 ? webTechs.push(sass) : console.log(sass + ' is a CSS preprocess')
console.log(webTechs)

//#6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

//merge backEnd with frontEnd and save them as new array fullStack

fullStack =frontEnd.concat(backEnd)

console.log(fullStack)



