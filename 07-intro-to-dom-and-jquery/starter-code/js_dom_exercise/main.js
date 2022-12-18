/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

// Vanilla JS
function addToList(list, newThing) {
  let newThingLi = document.createElement('li')
  let newThingText = document.createTextNode(newThing)
  newThingLi.appendChild(newThingText)
  list.appendChild(newThingLi)

}

window.onload = function() {
  let button = document.getElementById('new-thing-button')
  let thingList = document.getElementById('fav-list')
  let newThingInput = document.getElementById('new-thing')
  
  // when someone clicks the button...
  button.onclick = function(evt) {
    evt.preventDefault()
    let newThing = newThingInput.value;
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
    addToList(thingList, newThing)
    newThingInput.value = '';
    }
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};


//jQuery Conversion
function addToList($list, newThing) {
  const $thingLi = $('li')
  $thingLi.text(newThing)
  $list.append($thingLi)
}

$(document).ready(function(){
  const $button = $('#new-thing-button')
  const $thingList = $('#fav-list')
  const $newThingInput = $('#new-thing')

  $button.on('click', function(evt)) {
    evt.preventDefault()
    let newThing = $newThingInput.val()
    if(newThing === '') {
      alert('You must type something!')
    } else {
      addToList($thingList, newThing)
      $newThingInput.val('')
    }
  }

})

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


