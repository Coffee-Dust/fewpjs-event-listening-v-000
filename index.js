function addingEventListener() {
  const input = document.querySelector('#input')
  input.addEventListener('click', callback(e))
}

function callback(event) {
  alert("I was clicked!")
}