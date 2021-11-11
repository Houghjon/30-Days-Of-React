
// #1 Craete var prompt to take score from input

let gradeScore = prompt("What score did you get on the test?")
// Use swith to create to identify what grade should be given, based on score input.
switch(true) {
case gradeScore > 79 :
    console.log('Congratulations! You got an A.')
    break

case gradeScore > 69 && gradeScore < 80 :
    console.log('You got a B. Well done!')
    break

case gradeScore > 59 && gradeScore < 70 :
    console.log('You got a C')
    break

case gradeScore > 49 && gradeScore < 60 :
    console('You got a D. Better luck next time.')
    break

case gradeScore >= 0 && gradeScore < 50 :
    console.log('Unfortuneately you did not pass, you got an F.')
    break
} 

//#2 create month var to take input

let month = prompt('What month is it?')
// use switch which takes the var month and stackcases accordingly
switch(month){
    case month.toLowerCase() = 'september' :
    case month.toLowerCase() = 'october' : 
    case month.toLowerCase() = 'november' :
        console.log('It is autumn.')
        break

    case month.toLowerCase() = 'december' :
    case month.toLowerCase() = 'january' :
    case month.toLowerCase() = 'february' :
        console.log('It is winter.')
        break
    case month.toLowerCase() = 'march' :
    case month.toLowerCase() = 'april' :
    case month.toLowerCase() = 'may' :
        console.log('It is spring.')
        break

    case month.toLowerCase() = 'june' :
    case month.toLowerCase() = 'juli' :
    case month.toLowerCase() = 'august' :
        console.log('It is summer!')
        break
    
}

// #3 first we create a functionto capitalize only the first letter of a string

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
//var day to take user input and use it in switch loop to determine whether weekday or workday
let day = prompt("What day is it today?").toLowerCase()
switch(day){
    case day = "monday":
    case day = "tuseday":
    case day = "wednesday":
    case day = "thursday":
    case day = "friday":
        console.log(capitalizeFirstLetter(day) + ' is a workday.')
        break
    
    case day = 'saturday':
    case day = 'sunday':
        console.log(capitalizeFirstLetter(day) + ' is a weekend.')
        break
}
