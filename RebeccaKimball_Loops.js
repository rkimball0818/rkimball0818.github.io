//Assignment #1
for (let beer = 99; beer >= 0; beer--) {
    if (beer > 1) {
    console.log(beer + ' bottles of beer on the wall, ' + beer + ' bottles of beer.')
    console.log('Take one down, pass it around ' + (beer-1) + ' bottles of beer on the wall.')
    }

    if (beer == 1) {
        console.log(beer + ' bottle of beer on the wall, ' + beer + ' bottle of beer.')
        console.log('Take one down, pass it around ' + (beer-1) + ' bottle of beer on the wall.')
    }
    if (beer == 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log("Go to the store and buy some more, " + (beer+99) + ' bottles of beer on the wall.')
  }
}

//Assignment #2

const streetNumber = ['11245', '98172', '80834', '45678', '23416', '65784'];
const streetName = ['S. Caley St', 'E. Caley Dr', 'N. Country Trl', 'W. Pony Express Trl', 'S. Caley Cir', 'E. Newton St'];
const city = ['Ault,', 'Denver,', 'Aurora,', 'Fort Collins,', 'Greeley,', 'Brighton,', 'Loveland,'];
const state = ['Colorado', 'Washington', 'Oregon', 'Iowa', 'Nevada'];
const zipCode = ['80610', '80016', '80015', '80204', '80010', '80620'];

const randomStreetNumber = Math.floor((Math.random() * streetNumber.length))
const randomStreetName = Math.floor((Math.random() * streetName.length))
const randomCity = Math.floor((Math.random() * city.length))
const randomState = Math.floor((Math.random() * state.length))
const randomZipCode = Math.floor((Math.random() * zipCode.length))

console.log(streetNumber[randomStreetNumber] + ' ' + streetName[randomStreetName] + ' ' + city[randomCity] + ' ' + state[randomState] + ' ' + zipCode[randomZipCode]);
