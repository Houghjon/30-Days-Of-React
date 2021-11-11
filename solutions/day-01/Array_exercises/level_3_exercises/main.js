//#1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//sorting array and checking if sorted correct
ages.sort()
console.log(ages)
//having sorted array we can find min age by taking index 0 and max age by taking last index
let maxAge = ages[ages.length - 1]
let minAge = ages[0]
console.log("The minimum age in the array i: " + minAge + 
". The maximum age in the array is: " + maxAge)
// to find average we first find the sum of the array and divede it by the number of elements (arrayLength)
let sum = ages.reduce((sum,val) => (sum+=val))
let avg = sum /ages.length
console.log("The average age in the array is: " + avg)
//to find the median value
let mid = Math.ceil(ages.length/2)
let median =
ages.length % 2 == 0 ? (ages[mid] + ages[mid - 1]) / 2 : ages[mid - 1];
console.log("Median age is: " + median)
//age ranges us Math.abs() to get positve value of nr
console.log('The age range is: ', maxAge - minAge)

let minToAvg = minAge - avg
let maxToAvg = maxAge - avg

console.log('The youngest is ' + Math.abs(minToAvg) + ' younger than average. The oldest is ' + Math.abs(maxToAvg) + ' older than average')

//#1,5
console.log(countries.slice(0, 10))

//2 returns middle ountry finland as ther is an uneven nr of countries. If even, return two middle countries (use line 34 to see difference)
//countries.push('Switzerland')
let midVal = Math.ceil(countries.length/2)
let middleCountry =
countries.length % 2 == 0 ? (countries[midVal] + ' and ' + countries[midVal - 1]) : countries[midVal - 1];

console.log("Middle country is: " + middleCountry)


//3
//use math.ceil which rounds up if nr is decimal. thereby the newMidVal will always result in either perfect split or one more(6,5 rounded to 7) if uneven. Check differnce with line 42
//countries.push('Switzerland')
let newMidVal = Math.ceil(countries.length/2)
let firstHalfCountries = countries.slice(0,newMidVal)
let secondHalfCountries = countries.slice(newMidVal, countries.length)

console.log(firstHalfCountries)
console.log(secondHalfCountries)