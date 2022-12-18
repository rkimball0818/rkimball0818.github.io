// comment out your code for notes
var name = 'David' // DO NOT USE
let name2 = 'Jack' // can be modified
const name3 = 'Bonanza Jellybean' // stays the same

// REPL 
// Read
// Evaluate
// Print
// Loop

let iPhone
iPhone = '13 mini'
const myName = 'David' // must assign a value when declared
const welcome = 'Welcome to Better Farm!'
let array = ['item', 'stuff', 'things'] 

const message = []

// message.push(8)
// message.push('r', 'e', 'b', 'm', 'u')
// message.push('n', 's', 'i', 'A', 'G', 'K')
// message.pop()
// message.shift()
// message.unshift(1)
// message.reverse()
// let newMessage = message.join(' ')
// console.log(newMessage);

// const teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
// for (let i = 0; i < teams.length; i++) {
// 	console.log(teams[i]);
// }

// const teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
// for (let i = 2; i < teams.length; i++) {
// 	console.log(teams[i]);
// }

const teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(team) {
    console.log(team);
});