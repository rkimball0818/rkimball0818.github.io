//const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Bumble',];
//const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Tinder'];
//added a couple array items on the end
const xy = document.getElementById("xForY");
const create = document.getElementById("create");
const save = document.getElementById("save");
const printFavs = document.getElementById("print");
const favorites = document.getElementById("favorites");

//document.body.addEventListener('')

create.onclick = function clicked(event){
    event.preventDefault();
    const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Bumble',];
    const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Tinder'];

    const random1 = Math.floor((Math.random() * startupX.length));
    const random2 = Math.floor((Math.random() * startupY.length));

    newMadLibSaying.innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
};

// save.onclick = function clicked(event){
//     event.preventDefault();
//     const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Bumble',];
//     const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Tinder'];

//     const random1 = Math.floor((Math.random() * startupX.length));
//     const random2 = Math.floor((Math.random() * startupY.length));

//     newMadLibSaying.innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
// };

// printFavs.onclick = function clicked(event){
//     event.preventDefault();
//     const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Bumble',];
//     const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Tinder'];

//     const random1 = Math.floor((Math.random() * startupX.length));
//     const random2 = Math.floor((Math.random() * startupY.length));

//     newMadLibSaying.innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
// };

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
