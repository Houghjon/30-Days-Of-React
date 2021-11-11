//#1 create month var to take month input from user and make it lowercase for case recognition.
let month = prompt('What month is it?').toLowerCase()

//create function to capitalize first letter when printing the month in console.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

switch(month){
    case month = 'january':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break

    case month = 'february' :
    //use extra switch in february case to ask user whether it is gap year or not and then distinguish between the two.
    let gapYear = prompt('Is it a gap year?').toLowerCase()

        switch(gapYear) {
            case gapYear = 'yes':
                console.log(capitalizeFirstLetter(month) + ' has 27 days.')
                break

            case gapYear = 'no':
                console.log(capitalizeFirstLetter(month) + ' has 28 days.')
                break
                }
    break

   
    case month = 'march':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break

    case month = 'april':
    console.log(capitalizeFirstLetter(month) + ' has 30 days.')
    break

    case month = 'may':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break

    case month = 'june':
    console.log(capitalizeFirstLetter(month) + ' has 30 days.')
    break

    case month = 'july':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break

    case month = 'august':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break

    case month = 'september':
    console.log(capitalizeFirstLetter(month) + ' has 30 days.')
    break

    case month = 'october':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break

    case month = 'november':
    console.log(capitalizeFirstLetter(month) + ' has 30 days.')
    break

    case month = 'december':
    console.log(capitalizeFirstLetter(month) + ' has 31 days.')
    break
}