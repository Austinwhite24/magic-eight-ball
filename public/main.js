console.log('hello world')


//////// Top Right Button Links//////////

const profilebutton = document.getElementById('profileBtn')
const loginSignUpBtn = document.getElementById('loginSignUpBtn')
const homeButton = document.getElementById('homeBtn')


profilebutton.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href="./profile.html"
})
loginSignUpBtn.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href="./signUp.html"
})

homeButton.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href="./main.html"
})















