function addingEventListener() {
  const input = document.querySelector('#input')
  input.addEventListener('click', callback())
}

function callback(event) {
  alert("I was clicked!")
}