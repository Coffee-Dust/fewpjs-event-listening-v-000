function addingEventListener() {
  const input = document.querySelector('#input')
  input.addingEventListener('click', callback())
}

function callback(event) {
  alert("I was clicked!")
}