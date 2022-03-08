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



// const myName =document.getElementById('myNameBtn')

// myName.addEventListener('click', (e) => {
//   e.preventDefault()
//   axios.post('http://localhost:4004/api/name/', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }


// const enterButton = document.getElementById("questionText")

// enterButton.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("askButton").click();
//   }
// });

// enterButton.addEventListener('keyup', () => {
//   // e.preventDefault()
//   axios.get("http://localhost:4004/api/compliment/")
//       .then(function (response) {
//         const data = response.data;
//         alert(data);
// })
// .submit = function () {
//   axios.get("http://localhost:4004/api/compliment/")
//       .then(function (response) {
//         const data = response.data;
//         alert(data);
//       });


// console.log(minusBtn)

// plusBtn.addEventListener('click', increase)
// minusBtn.addEventListener('click', decrease)
// resetBtn.addEventListener('click', reset)




// const magicResponse = () => {
//   console.log("what up")
// }

// askBtn.addEventListener('click', magicResponse)


// document.querySelector("#askButton").onclick = function () {
//   axios.get("http://localhost:4004/api/compliment/")
//       .then(function (response) {
//         const data = response.data;
//         alert(data);
//       });
// };







// document.getElementById("askBtn").onclick = function () {
//   axios.get("http://localhost:4004/api/compliment/")
//       .then(function (response) {
//         const data = response.data;
//         alert(data);
//       });
// };


// http://localhost:4004/api/compliment/






