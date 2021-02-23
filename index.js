function addingEventListener() {
  const input = document.querySelector('#input')
  input.addingEventListener('click', callback(event))
}

function callback(event) {
  alert("I was clicked!")
}